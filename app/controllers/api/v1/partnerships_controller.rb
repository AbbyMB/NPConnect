class Api::V1::PartnershipsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: Partnership.all
  end

  def create
    existing_partnership = Partnership.find_by(user: current_user, program_id: params[:program_id])
    if existing_partnership
      existing_partnership.destroy
      render json: { partnership: false }
    else
      @partnership = Partnership.new(user: current_user, program_id: params[:program_id])

      if @partnership.save
        render json: {partnership: true}
      else
        render json: {error: "Unable to save partnership"}
      end
    end
  end
end
