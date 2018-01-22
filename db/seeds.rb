# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

recumbent_bike = ExerciseType.create!(name: 'Recumbent Bike')
weights = ExerciseType.create!(name: 'Free Weights')
body_weight_machine = ExerciseType.create!(name: 'Body Weight Machine')

Exercise.create!(name: 'Dumbbell Curl', description: "Using an appropriate-sized dumbbell, place your arm at your side with your elbow tucked against your body. Raise the dumbbell slowly while keeping your elbow at your side. Do not rock back and forth when performing the curls; this is an indication that the weight is too high or that exhaustion has been reached. Perform 4-15 reps, based upon weight and number of sets (supersets are acceptable).", exercise_type: weights)
