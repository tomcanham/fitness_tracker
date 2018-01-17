class CreateExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.text :description
      t.integer :exercise_type

      t.timestamps
    end
    add_index :exercises, :exercise_type
  end
end
