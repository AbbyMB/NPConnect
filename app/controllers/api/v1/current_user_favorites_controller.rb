class Api::V1::CurrentUserFavoritesController < ApplicationController
  def index
    render json: {favorite_funders: current_user.funders.pluck(:id)}
  end

end
