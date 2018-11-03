class FunderSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :category

  has_many :favorites 
end
