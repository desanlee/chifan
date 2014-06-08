class CreateGamblegames < ActiveRecord::Migration
  def change
    create_table :gamblegames do |t|
      t.integer :user_id
      t.string :description
      t.string :options
      t.integer :result

      t.timestamps
    end
  end
end
