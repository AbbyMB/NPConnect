class Api::V1::SearchsController < ApplicationController

  def show
    @programs = Program.within(params[:mileage], :origin => params[:address])
    render json: @programs
  end
end
