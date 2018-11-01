class Funder < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :organization, presence: true
  validates :url, presence: true
  validates :category, presence: true
end
