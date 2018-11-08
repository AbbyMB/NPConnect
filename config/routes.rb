Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :homes, only: :index
  resources :users, only: :show
  resources :funders, only: :index
  resources :programs, only: :index

  namespace :api do
    namespace :v1 do
      resources :funders, only: :index do
        resources :favorites, only: [ :index, :create ]
      end
      resources :users, only: [ :index, :show ] do
        resources :programs, only: [ :index, :show, :create ]
        resources :favorites, only: [ :index, :create ] do
          resources :funders, only: :index
        end
      end
      resource :current_user, only: [ :show ] do
        resources :current_user_favorites, only: :index
      end
      resource :searchs, only: [ :show ]
      resources :programs, only: [ :index ]
    end
  end
end
