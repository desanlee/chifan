class Lunch < ActiveRecord::Base
  attr_accessible :expense, :note, :title
  has_many :attrelationships, foreign_key: "lunch_id", class_name:  "Attrelationship", dependent: :destroy
  has_many :users, through: :attrelationships, source: :user
end
