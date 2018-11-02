class Api::V1::FundersController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: Funder.all
  end
end
