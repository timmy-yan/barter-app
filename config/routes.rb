Rails.application.routes.draw do
resources :categories
resources :items
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :users
  get '/categories/:category_id/items', to: 'categories#show', as: 'category_items'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
