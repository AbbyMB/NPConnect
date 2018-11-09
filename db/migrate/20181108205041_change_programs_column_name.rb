class ChangeProgramsColumnName < ActiveRecord::Migration[5.2]
  def self.up
    rename_column :programs, :user_id, :owner_id
  end

  def self.down
    rename_column :programs, :owner_id, :user_id
  end
end
