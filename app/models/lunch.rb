class Lunch < ActiveRecord::Base
  attr_accessible :expense, :note, :title, :fangroup_id
  
  has_many :attrelationships, foreign_key: "lunch_id", class_name:  "Attrelationship", dependent: :destroy
  has_many :participants, through: :attrelationships, source: :user
  
  belongs_to :fangroup, class_name: "Fangroup" 
  
	def today?
		if Time.now.strftime('%y%m%d') == self.created_at.to_time.strftime('%y%m%d')
			return true
		else
			return false
		end
	end
  
	def checkedout?
		if self.expense == nil then
			return false
		elsif self.expense <= 0 then
			return false
		else
			return true
		end
	end
	
	def haveatt?
		if self.participants.count > 0
			return true
		else
			return false
		end
	end
	
  def attrelationship user
  	fr = Attrelationship.find_by_user_id_and_lunch_id(user.id, self.id)
  	return fr
  end
  
end
