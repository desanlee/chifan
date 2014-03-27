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
  	if self.lunches.count != 0 then
  	  if !self.lunches.last.today? then
  	  	  newlunch = Lunch.new
  	  	  newlunch.fangroup_id = self.id
  	  	  newlunch.save
  	  	  return newlunch
  	  else
  	  	  return self.lunches.last
  	  end
  	else
  		newlunch = Lunch.new
  	 	newlunch.fangroup_id = self.id
  	 	newlunch.save
  	  return newlunch
  	end
  end
  
  def followrelationship user
  	fr = Followrelationship.find_by_user_id_and_fangroup_id(user.id, self.id)
  	return fr
  end
  
end
