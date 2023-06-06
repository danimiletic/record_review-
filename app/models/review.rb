class Review < ApplicationRecord
  belongs_to :album

  validates :title, :description, :score, presence: true
end
