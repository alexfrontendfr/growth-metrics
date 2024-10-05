class MetricsController < ApplicationController
    def create
      metric = Metric.new(metric_params)
      if metric.save
        ActionCable.server.broadcast "metrics_channel", metric
        render json: metric, status: :created
      else
        render json: { errors: metric.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
  
    def index
      metrics = Metric.order(timestamp: :desc).limit(100)
      render json: metrics
    end
  
    private
  
    def metric_params
      params.require(:metric).permit(:name, :value, :timestamp)
    end
  end