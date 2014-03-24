class Fangroup < ActiveRecord::Base
  attr_accessible :nickname, :user_id
  
  belongs_to :user, class_name: "User"
  
  has_many :reverse_followrelationships, foreign_key: "fangroup_id", class_name: "Followrelationship", dependent: :destroy
  has_many :users, through: :reverse_followrelationships, source: :user
  
  has_many :incharges, class_name: "Incharge"
  has_many :lunches, class_name: "Lunch"
  
  def remainsum
  end
  
  def todaylunch
  	  if !self.lunches.latest.today? then
  	  	  newlunch = new Lunch
  	  	  newlunch.fangroup_id = self.id
  	  	  newlunch.save
  	  	  return newlunch
  	  else
  	  	  return self.lunches.latest
  	  end
  end
  
end
