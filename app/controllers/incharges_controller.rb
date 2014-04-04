class InchargesController < ApplicationController
  def create
		@incharge = Incharge.new(params[:incharge])
		@incharge.confirm = 0
		@incharge.save if @incharge.user_id != nil and @incharge.fangroup_id != nil
		
		redirect_to "/fangroups"
  end

  def index
  end

  def update
    @incharge = Incharge.find(params[:id])

    @incharge.update_attributes(params[:incharge])
		redirect_to "/fangroups"
  end
	
end
