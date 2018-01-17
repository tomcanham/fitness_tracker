class WeightsSet < ApplicationRecord
  belongs_to :exercises
  enum weight_type: [:dumbbell, :barbell]
end
