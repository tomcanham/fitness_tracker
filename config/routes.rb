Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  scope '/api/v1' do
    resources :exercises
  end
end
