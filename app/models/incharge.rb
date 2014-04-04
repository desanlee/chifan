class Incharge < ActiveRecord::Base
  attr_accessible :amount, :fangroup_id, :user_id, :confirm
  
  belongs_to :user, class_name: "User"
  belongs_to :fangroup, class_name: "Fangroup"
  
end
