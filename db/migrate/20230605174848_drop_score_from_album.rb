class DropScoreFromAlbum < ActiveRecord::Migration[6.1]
  def change
    remove_column :albums, :score
  end
end
