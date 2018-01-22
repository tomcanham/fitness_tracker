class ExercisesController < ApplicationController
  def index
    render json: Exercise.all.order("name asc")
  end

  def show
    @exercise = Exercise.find(params[:id])

    render json: @exercise
  end

  def create
    @exercise = Exercise.new(exercise_params)
    if @exercise.save
      render json: @exercise
    else
      render json: { status: "validation error", code: 422, errors: @exercise.errors }
    end
  end

  def update
  end

  def delete
  end

  private

  def exercise_params
    params.require(:exercise).permit(:name, :description, :exercise_type)
  end
end
