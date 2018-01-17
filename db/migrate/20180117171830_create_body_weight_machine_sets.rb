class CreateBodyWeightMachineSets < ActiveRecord::Migration[5.1]
  def change
    create_table :body_weight_machine_sets do |t|
      t.integer :angle_setting
      t.integer :bands
      t.integer :reps
      t.references :exercises, foreign_key: true, index: true

      t.timestamps
    end
  end
end
