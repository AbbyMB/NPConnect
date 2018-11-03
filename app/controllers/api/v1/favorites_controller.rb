class Api::V1::FavoritesController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: Favorite.all 
  end

  def create
    existing_favorite = Favorite.find_by(user: current_user, funder_id: params[:funder_id])
    if existing_favorite
      existing_favorite.destroy
      render json: { favorited: false }
    else
      @favorite = Favorite.new(user: current_user, funder_id: params[:funder_id])

      if @favorite.save
        render json: {favorited: true}
      else
        render json: {error: "Unable to save favorite"}
      end
    end
  end
end
