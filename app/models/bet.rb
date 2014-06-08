class Bet < ActiveRecord::Base
  attr_accessible :gamble_id, :selection, :user_id
	
	belongs_to :gamble, foreign_key: "gamble_id", class_name: "Gamblegame"
	belongs_to :user, foreign_key: "user_id", class_name: "User"
	
	def winnercount
		if self.gamble.result == nil
			return 0 
		end
		c = 0
		self.gamble.bets.each do |b|
			c = c + 1 if b.selection == self.gamble.result
		end
		return c
	end
	
	def maywinnercount
		c = 0
		self.gamble.bets.each do |b|
			c = c + 1 if b.selection == self.selection
		end
		return c
	end
	
	def winprice
		if self.gamble.result == nil
			return 0 
		end
		if self.gamble.result != self.selection
			return 0 
		end
		return (self.gamble.bets.count * 1.0 / winnercount).round(2)
	end
	
	def maywinprice
		return ((self.gamble.bets.count * 1.0 / maywinnercount) - 1).round(2)
	end
	
end
