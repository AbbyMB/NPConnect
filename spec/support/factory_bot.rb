require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    first_name { 'first_name' }
    last_name { 'last_name' }
    username { 'username' }
  end

end
