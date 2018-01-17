class CreateWeightsSets < ActiveRecord::Migration[5.1]
  def change
    create_table :weights_sets do |t|
      t.decimal :weight
      t.integer :weight_type
      t.integer :reps
      t.references :exercises, foreign_key: true, index: true

      t.timestamps
    end
  end
end
