class Lunch < ActiveRecord::Base
  attr_accessible :expense, :note, :title, :fangroup_id
  
  has_many :attrelationships, foreign_key: "lunch_id", class_name:  "Attrelationship", dependent: :destroy
  has_many :participants, through: :attrelationships, source: :user
  
  belongs_to :fangroup, class_name: "Fangroup" 
  
end
