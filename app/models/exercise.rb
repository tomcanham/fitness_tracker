class Exercise < ApplicationRecord
  belongs_to :exercise_type

  validates :name, presence: true
  validates :description, presence: true
  validates :exercise_type, presence: true
end
