class Api::AlbumsController < ApplicationController
  before_action :set_album, only: [:show, :update, :destroy]

  def index 
    render json: current_user.albums
  end

  def show 
    render json: @album
  end

  def create 
    @album = current_user.albums.new(album_params)
      if @album.save 
        render json: @album
      else 
        render json: { errors: @album.errors}, status: :unprocessable_entity
      end
  end

  def update
    if @album.update(album_params)
      render json: @album
    else 
      render json: { errors: @album.errors}, status: :unprocessable_entity
    end
  end

  def destroy 
    @album.destroy
    render json: { message: "Album was deleted" }
  end

  private 

  def album_params
    params.require(:album).permit(:name, :artist, :image)
  end

  def set_album
    @album = current_user.albums.find(params[:id])
  end

end
