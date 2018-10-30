Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: :show
  namespace :api do
    namespace :v1 do
      resources :current_user, only: [ :index ]
    end
  end
end
