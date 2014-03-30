class AddConfirmToIncharges < ActiveRecord::Migration
  def change
    add_column :incharges, :confirm, :integer
  end
end
