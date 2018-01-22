class ExerciseType < ApplicationRecord
  has_many :exercises
  validates :name, presence: true
  validates :name, uniqueness: true
end
