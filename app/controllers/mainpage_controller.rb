class MainpageController < ApplicationController
	def home
		@fangroups = current_user.fangroups
		@currentfangroup = nil
		if @fangroups.count != 0
			@currentfangroup = @fangroups.first 
			@currentlunch = @currentfangroup.todaylunch
		end
		
		@mylunches = current_user.lunchs
	end
	
end
