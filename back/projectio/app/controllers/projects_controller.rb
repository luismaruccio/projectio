class ProjectsController < ApplicationController
  before_action :set_project, only: [ :show, :update, :destroy ]

  def index
    projects = Project.all.map do |project|
      {
        id: project.id,
        name: project.name,
        start_date: project.start_date,
        end_date: project.end_date,
        activities_count: project.activities_count,
        completed_activities_count: project.completed_activities_count,
        completion_percentage: project.completion_percentage,
        overdue_activity: project.overdue_activity?
      }
    end

    render json: projects
  end

  def show
    render json: @project
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      render json: @project, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @project.destroy
    head :no_content
  end

   def update
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :start_date, :end_date)
  end
end
