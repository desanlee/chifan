class FollowrelationshipsController < ApplicationController

def create
	newrelationship = Followrelationship.new
	newrelationship.user_id = params[:user_id]	
	newrelationship.fangroup_id = params[:fangroup_id]
	newrelationship.save
			
	redirect_to :back
end

def index
	newrelationship = Followrelationship.new
	newrelationship.user_id = params[:user_id]	
	newrelationship.fangroup_id = params[:fangroup_id]
	newrelationship.save
			
	redirect_to :back
end

def destroy
	relationship = Followrelationship.find(params[:id])
	relationship.destroy if relationship != nil
	
	redirect_to :back
end

end
