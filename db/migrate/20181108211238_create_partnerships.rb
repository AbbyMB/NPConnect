class CreatePartnerships < ActiveRecord::Migration[5.2]
  def change
    create_table :partnerships do |t|
      t.belongs_to :user, null: false
      t.belongs_to :program, null: false

      t.timestamps null: false
    end
  end
end
