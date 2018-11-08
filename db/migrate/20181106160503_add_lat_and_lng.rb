class AddLatAndLng < ActiveRecord::Migration[5.2]
  def change
    add_column :programs, :lat, :decimal
    add_column :programs, :lng, :decimal
  end
end
