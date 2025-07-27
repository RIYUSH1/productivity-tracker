import React from 'react';

function classify(site) {
  const productiveSites = ['leetcode', 'github', 'stack', 'w3schools', 'geeksforgeeks'];
  return productiveSites.some((s) => site.includes(s)) ? 'Productive' : 'Unproductive';
}

function ReportTable({ data }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Website</th>
            <th className="py-3 px-6 text-left">Time Spent (mins)</th>
            <th className="py-3 px-6 text-left">Classification</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr key={i} className="border-b hover:bg-indigo-50">
              <td className="py-3 px-6">{entry.website}</td>
              <td className="py-3 px-6">{Math.round(entry.timeSpent / 60000)}</td>
              <td className={`py-3 px-6 font-semibold ${classify(entry.website) === 'Productive' ? 'text-green-600' : 'text-red-500'}`}>
                {classify(entry.website)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReportTable;