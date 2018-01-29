Types::ExerciseType = GraphQL::ObjectType.define do
  name "Exercise"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.
  #
  # t.string :name
  # t.text :description
  # t.references :exercise_type, foreign_key: true
  #
  # t.timestamps
  # TODO: remove me
  field :name, types.String do
    description "The exercise name"
    resolve ->(obj, args, ctx) {
      ["This is an exercise", "This is another exercise"]
    }
  end
end
