class Score < ActiveRecord::Base
  attr_accessible :game_id, :record, :user_id
end
