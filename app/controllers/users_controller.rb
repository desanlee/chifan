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

  def update
    @user = User.find(params[:id])

    @user.update_attributes(params[:user])
		redirect_to "/users"
  end
	
end
