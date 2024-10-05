class ABTestsController < ApplicationController
    def create
      ab_test = ABTest.new(ab_test_params)
      if ab_test.save
        render json: ab_test, status: :created
      else
        render json: { errors: ab_test.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def index
      ab_tests = ABTest.all
      render json: ab_tests
    end
  
    private
  
    def ab_test_params
      params.require(:ab_test).permit(:name, :variant_a, :variant_b, :start_date, :end_date)
    end
  end