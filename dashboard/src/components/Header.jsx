import React from 'react';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="flex justify-between items-center p-4 bg-indigo-600 text-white rounded-b-lg shadow-md">
      <h1 className="text-xl font-bold">🧠 Productivity Tracker</h1>
      <button
        onClick={toggleDarkMode}
        className="bg-white text-indigo-600 px-3 py-1 rounded hover:bg-gray-100"
      >
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
