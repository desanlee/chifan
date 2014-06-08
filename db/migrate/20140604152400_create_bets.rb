class CreateBets < ActiveRecord::Migration
  def change
    create_table :bets do |t|
      t.integer :user_id
      t.integer :gamble_id
      t.integer :selection

      t.timestamps
    end
  end
end
