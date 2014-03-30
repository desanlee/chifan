class UsersController < ApplicationController
	def show
	end
	
	def index
		session[:tab] = "users"
	end
	
  def destroy
  	  @user = User.find(params[:id])
  	  @user.destroy
	redirect_to :back
  end

end
