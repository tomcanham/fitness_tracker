class AddExerciseTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :exercise_types do |t|
      t.string :name, index: true, unique: true

      t.timestamps
    end
  end
end
