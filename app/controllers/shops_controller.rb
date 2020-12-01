class ShopsController < ApplicationController
  before_action :find_shop, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @shops = Shop.all
  end

  def show
  end

  def new
    @shop = Shop.new
  end

  def create
    @shop = Shop.new(strong_params)
    @shop.user = current_user
    @shop.user.address = current_user.address
    if @shop.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    @shop
    if @shop.update(strong_params)
      flash[:notice] = "Updated"
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def destroy
    @shop = Shop.destroy(strong_params)
    redirect_to dashboard_path
  end

  private

  def strong_params
    params.require(:shop).permit(:id, :address, :city, :post_code, :country, :name, :phone_number, :website)
  end

  def find_shop
    @shop = Shop.find(params[:id])
  end
end