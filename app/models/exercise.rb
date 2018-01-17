class Exercise < ApplicationRecord
  enum exercise_type: [:recumbent_bike, :weights, :body_weight_machine]
  validates :name, presence: true
  validates :description, presence: true
  validates :exercise_type, presence: true
end
