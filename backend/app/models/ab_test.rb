class ABTest < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :variant_a, presence: true
    validates :variant_b, presence: true
    validates :start_date, presence: true
    validates :end_date, presence: true
  end