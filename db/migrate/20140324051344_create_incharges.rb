class CreateIncharges < ActiveRecord::Migration
  def change
    create_table :incharges do |t|
      t.integer :user_id
      t.integer :fangroup_id
      t.integer :amount

      t.timestamps
    end
  end
end
