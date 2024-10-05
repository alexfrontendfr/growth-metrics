class CreateAbTests < ActiveRecord::Migration[7.2]
  def change
    create_table :ab_tests do |t|
      t.string :name
      t.string :variant_a
      t.string :variant_b
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
