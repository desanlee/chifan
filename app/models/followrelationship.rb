class Followrelationship < ActiveRecord::Base
  attr_accessible :fangroup_id, :user_id
  
  belongs_to :fangroup, class_name: "Fangroup"
  belongs_to :user, class_name: "User"
  
end
