class Game < ActiveRecord::Base
  attr_accessible :episode, :info, :season, :task, :title
end
