class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, on: :create
    validates :role, presence: true
  
    enum role: { user: 'user', admin: 'admin' }
  end