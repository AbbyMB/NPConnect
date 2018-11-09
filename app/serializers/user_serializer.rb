class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :first_name, :last_name

  has_many :created_programs
  has_many :favorites
  has_many :partnerships
end
