class GamesController < ApplicationController

	def index
		session[:tab] = "games"
		redirect_to "/bomber.html"
	end
	
end
