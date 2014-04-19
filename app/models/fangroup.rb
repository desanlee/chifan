class Fangroup < ActiveRecord::Base
  attr_accessible :nickname, :user_id
  
  belongs_to :user, class_name: "User"
  
  has_many :reverse_followrelationships, foreign_key: "fangroup_id", class_name: "Followrelationship", dependent: :destroy
  has_many :users, through: :reverse_followrelationships, source: :user
  
  has_many :incharges, class_name: "Incharge"
  has_many :lunches, class_name: "Lunch"
  
  def expense
  	sum = 0;
  	self.lunches.each do |l|
  		sum += l.expense if l.expense != nil
  	end
  	return sum
	end
	
  def remaining
		sum = 0;
		self.incharges.each do |i|
			sum += i.amount if i.confirm == 1
		end
		return sum - self.expense
  end
	
	def inchargeapplications
		ia = Array.new
		self.incharges.each do |i|
			ia << i if i.confirm != 1
		end
		return ia
	end
  
  def weekdaylunch weekday
		start_date = Time.now.beginning_of_week + (weekday-1).days
		finish_date = start_date + 1.day
		
		lunch = Lunch.find(:first, conditions: ["fangroup_id == ? and created_at >= ? AND created_at < ?", self.id, start_date, finish_date] )
  	if !lunch then
  		newlunch = Lunch.new
  	 	newlunch.fangroup_id = self.id
			newlunch.created_at = start_date
  	 	newlunch.save
  	  return newlunch
		else
			return lunch
  	end
  end
  
  def followrelationship user
  	fr = Followrelationship.find_by_user_id_and_fangroup_id(user.id, self.id)
  	return fr
  end
  
end
