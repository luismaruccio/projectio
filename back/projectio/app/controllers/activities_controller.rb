class ActivitiesController < ApplicationController
  before_action :set_activity, only: [ :show, :update, :destroy ]

  def show
    render json: @activity
  end

  def create
    project = Project.find(params[:project_id])
    @activity = project.activities.build(activity_params)

    if @activity.save
      render json: @activity, status: :created
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
  end

  private

  def set_activity
    @activity = Activity.find(params[:id])
  end

  def activity_params
    params.require(:activity).permit(:project_id, :name, :start_date, :end_date, :completed)
  end
end
