class Api::V1::ProgramsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: {
      programs: Program.all,
      partnerships: current_user.programs.pluck(:id)
    } 
  end

  def create
    @program = Program.new(program_params)
    @program.owner = current_user
    if @program.save
      render json: {program: @program}
    else
      render json: {error: @program.errors.full_messages}
    end
  end

  def program_params
    params.require(:program).permit(:name, :description, :address, :category, :owner_id)
  end

end
