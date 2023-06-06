class Api::ReviewsController < ApplicationController
  before_action :set_album
  before_action :set_review, only: [:show, :update, :destroy]

  def index 
    render json: @album.reviews
  end

  def show
    render json: @review
  end

  def create 
    @review = @album.reviews.new(review_params)
    if @review.save 
      render json: @review
    else 
      render json: { errors: @review.errors}, status: :unprocessable_entity
    end
  end

  def update 
    if @review.update(review_params)
      render json: @review
    else 
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def destroy 
    @review.destroy
    render json: { message: "Review was deleted" }
  end

  private 

  def set_album
    @album = Album.find(params[:album_id])
  end

  def review_params
    params.require(:review).permit(:title, :description, :score)
  end

  def set_review
    @review = @album.reviews.find(params[:id])
  end

end
