class Program < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :category, presence: true

  belongs_to :user 
end
