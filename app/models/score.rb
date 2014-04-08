class Score < ActiveRecord::Base
  attr_accessible :game_id, :record, :user_id
  
  belongs_to :user
  belongs_to :game
  
  default_scope order: 'scores.record ASC'
  
end
