class Activity < ApplicationRecord
  belongs_to :project

  validates :name, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :project_id, presence: true
  validates :completed, inclusion: { in: [ true, false ] }

  def as_json(options = {})
    super(options.merge(except: [ :created_at, :updated_at ]))
  end
end
