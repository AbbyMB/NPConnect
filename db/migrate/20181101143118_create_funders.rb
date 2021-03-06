class CreateFunders < ActiveRecord::Migration[5.2]
  def change
    create_table :funders do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :url, null: false
      t.string :category, null: false

      t.timestamps null: false
    end
  end
end
