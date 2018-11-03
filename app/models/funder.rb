class Funder < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :url, presence: true
  validates :category, presence: true

  has_many :favorites
  has_many :users, through: :favorites
end
