class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}
  
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

end
