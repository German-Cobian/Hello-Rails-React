Rails.application.routes.draw do
  root 'static#index'
  namespace :api, defaults: { format: 'json' } do
    get 'greetings', to: 'greetings#index'
  end
end

# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
