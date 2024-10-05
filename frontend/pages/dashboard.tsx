import React, { useState, useEffect } from "react";
import axios from "axios";
import MetricsChart from "../components/MetricsChart";
import ABTestForm from "../components/ABTestForm";
import { useAuth } from "../contexts/AuthContext";
import actionCable from "../utils/actionCable";

interface Metric {
  name: string;
  value: number;
  timestamp: string;
}

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get("http://localhost:3001/metrics", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setMetrics(response.data);
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    if (isAuthenticated) {
      fetchMetrics();

      const subscription = actionCable.subscriptions.create("MetricsChannel", {
        received: (data: Metric) => {
          setMetrics((prevMetrics) => [data, ...prevMetrics].slice(0, 100));
        },
      });

      return () => {
        subscription.unsubscribe();
      };
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <div>Please log in to view the dashboard.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Metrics Dashboard</h1>
      <MetricsChart metrics={metrics} />
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Create A/B Test</h2>
        <ABTestForm />
      </div>
    </div>
  );
};

export default Dashboard;
