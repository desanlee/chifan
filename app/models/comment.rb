class Comment < ActiveRecord::Base
  attr_accessible :content, :lunch_id, :user_id
	
	belongs_to :lunch, class_name: "Lunch"
	belongs_to :user, class_name: "User"
end
