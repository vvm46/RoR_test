class PostsController < ApplicationController
  def index

  end

  def create
    @post = Post.new(post_params)
    if @post.save
      # flash[:notice] = "Thank you for you message"
      redirect_to action: "index"
    # else
    #   flash[:notice] = "Somethings wrong"
    #   redirect_to action: "show"
    end
  end
    private def post_params
      params.require(:post).permit(:message, :name, :email)
    end
  end
