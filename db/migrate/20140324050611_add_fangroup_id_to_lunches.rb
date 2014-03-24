class AddFangroupIdToLunches < ActiveRecord::Migration
  def change
    add_column :lunches, :fangroup_id, :integer
  end
end
