class Api::V1::CurrentUserFavoritesController < ApplicationController
  def index
    render json: current_user.funders.pluck(:id)
  end

end
