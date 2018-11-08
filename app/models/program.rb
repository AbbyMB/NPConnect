class Program < ApplicationRecord
  acts_as_mappable :auto_geocode=>{:field=>:address, :error_message=>'Could not geocode address'}

  validates :name, presence: true
  validates :description, presence: true
  validates :category, presence: true
  validates :address, presence: true

  belongs_to :user
end
