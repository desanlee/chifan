class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :nickname
  # attr_accessible :title, :body
  
  has_many :reverse_attrelationships, foreign_key: "user_id", class_name:  "Attrelationship", dependent: :destroy
  has_many :lunchs, through: :reverse_attrelationships, source: :lunch
  
  has_many :followrelationships, foreign_key: "user_id", class_name: "Followrelationship", dependent: :destroy
  has_many :fangroups, through: :followrelationships, source: :fangroup
  
  has_many :incharges, class_name: "Incharge", dependent: :destroy
  
  def name
		if self.nickname == nil or self.nickname == ""
			return self.email
		else
			return self.nickname 
		end
  end
	
	def inchargeamount fangroup
		amount = 0
		self.confirmedcharges.each do |c|
			amount += c.amount if c.fangroup == fangroup
		end
		return amount
	end
	
	def lunchamount fangroup
		amount = 0
		self.confirmedlunchs.each do |l|
			amount += l.expense if l.fangroup == fangroup
		end
		return amount
	end
	
	def confirmedcharges
		cc = Array.new
		self.incharges.each do |c|
			cc << c if c.confirmed == 1
		end
		return cc
	end
  
	def confirmedlunchs
		cl = Array.new
		self.lunchs.each do |l|
			cl << l if l.checkedout?
		end
		return cl
	end
	
	def remaining fangroup
		return self.inchargeamount(fangroup) - self.lunchamount(fangroup) 
	end
	
end
