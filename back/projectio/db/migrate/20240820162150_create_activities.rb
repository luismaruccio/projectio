class CreateActivities < ActiveRecord::Migration[7.2]
  def change
    create_table :activities do |t|
      t.references :project, null: false, foreign_key: true
      t.string :name
      t.date :start_date
      t.date :end_date
      t.boolean :completed

      t.timestamps
    end
  end
end
