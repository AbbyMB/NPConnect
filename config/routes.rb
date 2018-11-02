Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :homes, only: :index
  resources :users, only: :show
  resources :funders, only: :index

  namespace :api do
    namespace :v1 do
      resources :funders, only: :index
      resources :users, only: [ :index, :show ] do
        resources :programs, only: [ :index, :show, :create ]
      end
      resources :current_user, only: [ :index ]
      resources :programs, only: [ :index, :show ]
    end
  end
end
