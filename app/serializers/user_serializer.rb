class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :first_name, :last_name

  has_many :programs
  has_many :favorites 
end
