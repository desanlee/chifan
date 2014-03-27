class AttrelationshipsController < ApplicationController

def create
	newrelationship = Attrelationship.new
	newrelationship.user_id = params[:user_id]	
	newrelationship.lunch_id = params[:lunch_id]
	newrelationship.save
			
	redirect_to :back
end

def index
	newrelationship = Attrelationship.new
	newrelationship.user_id = params[:user_id]	
	newrelationship.lunch_id = params[:lunch_id]
	newrelationship.save
			
	redirect_to :back
end

def destroy
	relationship = Attrelationship.find(params[:id])
	relationship.destroy if relationship != nil
	
	redirect_to :back
end

end
