class CreateRecumbentBikeRides < ActiveRecord::Migration[5.1]
  def change
    create_table :recumbent_bike_rides do |t|
      t.integer :intensity
      t.integer :duration
      t.references :exercises, foreign_key: true, index: true

      t.timestamps
    end
  end
end
