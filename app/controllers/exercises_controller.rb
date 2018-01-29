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
      render json: { message: "validation error", errors: @exercise.errors }, status: 422
    end
  end

  def update
    @exercise = Exercise.find(params[:id])
    if @exercise.update(exercise_params)
      render json: @exercise
    else
      p @exercise
      render json: { message: "validation error", errors: @exercise.errors }, status: 422
    end
  end

  def delete
    @exercise = Exercise.find(params[:id])
    @exercise.destroy!
    head :no_content
  end

  private

  def exercise_params
    params.require(:exercise).permit(:name, :description, :exercise_type_id)
  end
end
