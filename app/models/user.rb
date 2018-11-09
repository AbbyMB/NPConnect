class User < ApplicationRecord
    validates :email, presence: true
    validates :password, presence: true
    validates :username, presence: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :created_programs,
    class_name: "Program",
    foreign_key: "owner_id"
  has_many :favorites
  has_many :funders, through: :favorites
  has_many :partnerships
  has_many :programs, through: :partnerships
end
