class DeleteAddressColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :programs, :address, :string
  end
end
