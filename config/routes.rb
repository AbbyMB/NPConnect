Rails.application.routes.draw do
  root 'users#show'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: :show
  namespace :api do
    namespace :v1 do
      resources :users, only: [ :index, :show ] do
        resources :programs, only: [ :index, :show ]
      end
      resources :current_user, only: [ :index ]
      resources :programs, only: [ :index, :show, :create ]
    end
  end
end
