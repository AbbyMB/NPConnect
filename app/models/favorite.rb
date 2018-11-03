class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :funder

  validates :user_id, presence: true
  validates :funder_id, presence: true
end
