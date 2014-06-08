class LunchsController < ApplicationController

	def index
		session[:tab] = "lunchs"
		
		if params[:weekday]
			session[:weekday] = params[:weekday]
		end
		
		if session[:weekday]
			weekday = session[:weekday].to_i
		else
			weekday = Time.now.to_a[6]
			session[:weekday] = weekday.to_s
		end
		
		Time.now.beginning_of_week
		Time.now.end_of_week
		
		@gamblegames = Gamblegame.currentgambles
		
		@fangroups = current_user.fangroups
		@attrelationship = Attrelationship.new
		@lunches = Array.new
		@comment = Comment.new
		@fangroups.each do |fg|
			@lunches << fg.weekdaylunch(weekday)
		end
		
	end
	
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
	
  def update
    @lunch = Lunch.find(params[:id])

    respond_to do |format|
      if @lunch.update_attributes(params[:lunch])
        format.html { redirect_to :back, notice: 'Infopiece was successfully updated.' }
      end
    end
  end
	
  def destroy
  	  @lunch = Lunch.find(params[:id])
  	  @lunch.destroy
	redirect_to :back
  end

end
