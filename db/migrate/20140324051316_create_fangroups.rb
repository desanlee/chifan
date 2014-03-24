class CreateFangroups < ActiveRecord::Migration
  def change
    create_table :fangroups do |t|
      t.string :nickname
      t.integer :user_id

      t.timestamps
    end
  end
end
