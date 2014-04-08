class Game < ActiveRecord::Base
  attr_accessible :episode, :info, :season, :task, :title
  
  has_many :scores, class_name: "Score"
  
  def threshold
  	if self.scores.count < 3 then
  		return 0
  	else
  		return self.scores.third.record
  	end
	end
	
end
