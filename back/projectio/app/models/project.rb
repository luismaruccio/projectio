class Project < ApplicationRecord
  has_many :activities

  validates :name, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true

  def activities_count
    activities.count
  end

  def completed_activities_count
    activities.where(completed: true).count
  end

  def completion_percentage
    return 0 if activities_count == 0
    (completed_activities_count.to_f / activities_count * 100).round(2)
  end

  def overdue_activity?
    activities.where("completed = ? AND end_date > ?", false, end_date).exists?
  end
end
