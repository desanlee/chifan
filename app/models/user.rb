class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  # attr_accessible :title, :body
  
  has_many :reverse_attrelationships, foreign_key: "user_id", class_name:  "Attrelationship", dependent: :destroy
  has_many :lunchs, through: :reverse_attrelationships, source: :lunch
  
end
