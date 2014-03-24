class FangroupsController < ApplicationController
	
	def index
		@fangroups = Fangroup.all
		@newfangroup = Fangroup.new
	end

	def create
		@fangroup = Fangroup.new
		@fangroup.nickname = params[:nickname]
		@fangroup.user_id = current_user.id
		@fangroup.save
		
		redirect_to :back
	end
	
	def destroy
	end
	
end
