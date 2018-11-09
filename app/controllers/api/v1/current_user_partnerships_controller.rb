class Api::V1::CurrentUserPartnershipsController < ApplicationController
  def index
    render json: {partnerships: current_user.programs.pluck(:id)}
  end

end
