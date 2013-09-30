class CreateLunches < ActiveRecord::Migration
  def change
    create_table :lunches do |t|
      t.string :title
      t.integer :expense
      t.string :note

      t.timestamps
    end
  end
end
