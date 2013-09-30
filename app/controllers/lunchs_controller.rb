class LunchsController < ApplicationController
	def show
	end
  
	def create
		@lunch = Lunch.new
		@lunch.expense = params[:expense]
		@lunch.save
		
		@attenders = params[:user]
		
		@attenders.each do |userid|
			relationship = Attrelationship.new
			relationship.lunch_id = @lunch.id
			relationship.user_id = userid
			relationship.save
		end
		
		redirect_to root_url
	end
	
  def destroy
  	  @lunch = Lunch.find(params[:id])
  	  @lunch.destroy
	redirect_to :back
  end

end
