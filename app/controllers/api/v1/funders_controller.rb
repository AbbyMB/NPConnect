class Api::V1::FundersController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: {
      funders: Funder.all,
      favorite_funders: current_user.funders.pluck(:id)
    }
  end
end
