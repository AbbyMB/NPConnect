class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :user_id 
end
