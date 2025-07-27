import React, { useState } from 'react';
import ReportTable from './components/ReportTable';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductivityChart from './components/ProductivityChart';

const dummyData = [
  { website: 'leetcode.com', timeSpent: 1200000 },
  { website: 'facebook.com', timeSpent: 900000 },
  { website: 'github.com', timeSpent: 1800000 },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-gray-100 text-gray-800 min-h-screen'}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="p-4 max-w-4xl mx-auto">
        <ProductivityChart data={dummyData} />
        <div className="mt-6">
          <ReportTable data={dummyData} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
