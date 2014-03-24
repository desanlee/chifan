class MainpageController < ApplicationController
	def home
		@allusers = User.find(:all)
		@alllunchs = Lunch.find(:all)
		@mylunch = current_user.lunchs
		@totalexpense = 0
		if @mylunch then
			@mylunch.each do |ml|
				@totalexpense = @totalexpense + ml.expense / ml.users.count
			end
		end
		if @alllunchs then
			@latestlunch = @alllunchs.first
		end
	end
	
end
