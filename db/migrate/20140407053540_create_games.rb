class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :season
      t.integer :episode
      t.string :title
      t.string :info
      t.string :task

      t.timestamps
    end
  end
end
