class Api::V1::ProgramsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: Program.all
  end

  def create
    @program = Program.new(program_params)
    @program.user = current_user
    if @program.save
      render json: {program: @program}
    else
      render json: {error: @program.errors.full_messages}
    end
  end

  def program_params
    params.require(:program).permit(:name, :description, :address, :category, :user_id)
  end

end
