class Gamblegame < ActiveRecord::Base
  attr_accessible :description, :options, :result, :user_id
	
	belongs_to :user
	
	has_many :bets, foreign_key: "gamble_id"
	
	def Gamblegame.currentgambles
		cg = Array.new
		Gamblegame.all.each do |g|
			if g.result == nil then
				cg << g
			end
		end
		return cg
	end
	
	def Gamblegame.usersgambles user
		cg = Array.new
		Gamblegame.all.each 
	end
	
	def optionarray
		return self.options.split("#")
	end
	
	def usernotinvolved? user
		notinvolved = true
		self.bets.each do |b|
			notinvolved = false if b.user == user
		end
		return notinvolved
	end
	
	def usercount selection
		c = 0
		self.bets.each do |b|
			if b.selection == selection
				c = c + 1
			end
		end
		return c
	end
	
	def haswinner?
		if self.result > 0 
			self.bets.each do |b|
				if b.selection == self.result
					return true
				end
			end
			return false
		else
			return false
		end
	end
	
end
