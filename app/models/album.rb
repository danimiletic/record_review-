class Album < ApplicationRecord
  belongs_to :user
  has_many :reviews, dependent: :destroy 

  validates :name, :artist, :image, presence: true 

  def avg_score 
    reviews.average(:score).round(2).to_f 
  end
end
