class FunderSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :category 
end
