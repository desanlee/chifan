class Game < ActiveRecord::Base
  attr_accessible :episode, :info, :season, :task, :title
  
  has_many :scores, class_name: "Score"
  
  default_scope order: 'games.episode ASC'
  
  def threshold
  	if self.scores.count < 3 then
  		return 1000
  	else
  		return self.scores.third.record
  	end
	end
	
	def mybestscore user
		userscores = Score.find_all_by_game_id_and_user_id(self.id, user.id)
		if userscores.count != 0
			return userscores.first 
		else
			return nil
		end
	end
	
	def bestscore
		if self.scores.count != 0
			return self.scores.first
		else
			return nil
		end
	end
	
end
