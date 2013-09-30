class Attrelationship < ActiveRecord::Base
  attr_accessible :lunch_id, :user_id
  
  belongs_to :user, class_name: "User"
  belongs_to :lunch, class_name: "Lunch"
  
end
