class Lunch < ActiveRecord::Base
  attr_accessible :expense, :note, :title, :fangroup_id
  
  has_many :attrelationships, foreign_key: "lunch_id", class_name:  "Attrelationship", dependent: :destroy
  has_many :participants, through: :attrelationships, source: :user
  
  belongs_to :fangroup, class_name: "Fangroup" 
  
  def today?
  	return true
	end
  
  def attrelationship user
  	fr = Attrelationship.find_by_user_id_and_lunch_id(user.id, self.id)
  	return fr
  end
  
end
