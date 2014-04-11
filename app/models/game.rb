class Game < ActiveRecord::Base
  attr_accessible :episode, :info, :season, :task, :title
  
  has_many :scores, class_name: "Score"
  
  default_scope order: 'games.season ASC'
  
  def threshold
  	if self.scores.count < 3 then
  		return 1000
  	else
  		return self.scores.third.record
  	end
	end
	
end
