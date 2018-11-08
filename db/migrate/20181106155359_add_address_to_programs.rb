class AddAddressToPrograms < ActiveRecord::Migration[5.2]
  def change
    add_column :programs, :address, :string, null: false 
  end
end
