class CreateExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.text :description
      t.references :exercise_type, foreign_key: true

      t.timestamps
    end
  end
end
