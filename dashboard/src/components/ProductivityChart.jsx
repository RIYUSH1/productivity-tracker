import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function ProductivityChart({ data }) {
  const chartData = data.map((entry) => ({
    name: entry.website,
    mins: Math.round(entry.timeSpent / 60000),
  }));

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="text-lg font-semibold mb-4 text-indigo-600">Weekly Time Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="mins" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProductivityChart;
