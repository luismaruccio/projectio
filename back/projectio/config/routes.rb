Rails.application.routes.draw do
  resources :projects
  resources :activities, only: [ :show, :create, :update, :destroy ]
end
