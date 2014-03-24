class CreateFollowrelationships < ActiveRecord::Migration
  def change
    create_table :followrelationships do |t|
      t.integer :user_id
      t.string :fangroup_id

      t.timestamps
    end
  end
end
