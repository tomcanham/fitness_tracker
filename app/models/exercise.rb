class Exercise < ApplicationRecord
  enum exercise_type: [:recumbent_bike, :weights, :body_weight_machine]
end
