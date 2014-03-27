class FangroupsController < ApplicationController
	
	def index
		@fangroups = Fangroup.all
		@newfangroup = Fangroup.new
		
	end

	def create
		@fangroup = Fangroup.new(params[:fangroup])
		if @fangroup.nickname = ""
			@fangroup.nickname = current_user.nickname + "'s group"
		end
		@fangroup.user_id = current_user.id
		@fangroup.save
		
		redirect_to :back
	end
	
	def destroy
		@fangroup = Fangroup.find(params[:id])
		@fangroup.destroy
		redirect_to :back
	end
	
end
