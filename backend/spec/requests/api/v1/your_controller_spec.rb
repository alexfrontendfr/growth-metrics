require 'swagger_helper'

RSpec.describe 'API V1 Metrics', type: :request do
  path '/api/v1/metrics' do
    post 'Creates a metric' do
      tags 'Metrics'
      consumes 'application/json'
      parameter name: :metric, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          value: { type: :number },
          timestamp: { type: :string, format: :date-time }
        },
        required: [ 'name', 'value', 'timestamp' ]
      }

      response '201', 'metric created' do
        let(:metric) { { name: 'test metric', value: 10.5, timestamp: Time.now } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:metric) { { name: 'test metric' } }
        run_test!
      end
    end
  end
end