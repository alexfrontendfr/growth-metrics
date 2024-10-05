Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  post '/login', to: 'authentication#login'
  resources :metrics, only: [:create, :index]
  resources :ab_tests, only: [:create, :index]
end