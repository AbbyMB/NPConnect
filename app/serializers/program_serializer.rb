class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :owner_id 
end
