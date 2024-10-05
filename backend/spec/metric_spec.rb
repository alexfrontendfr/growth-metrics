require 'rails_helper'

RSpec.describe Metric, type: :model do
  it "is valid with valid attributes" do
    metric = Metric.new(name: "Test Metric", value: 10.5, timestamp: Time.now)
    expect(metric).to be_valid
  end

  it "is not valid without a name" do
    metric = Metric.new(value: 10.5, timestamp: Time.now)
    expect(metric).to_not be_valid
  end

  it "is not valid without a value" do
    metric = Metric.new(name: "Test Metric", timestamp: Time.now)
    expect(metric).to_not be_valid
  end

  it "is not valid without a timestamp" do
    metric = Metric.new(name: "Test Metric", value: 10.5)
    expect(metric).to_not be_valid
  end
end