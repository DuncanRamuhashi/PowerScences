import React from 'react';

const Footing = () => {
  // Set current year
  const year = new Date().getFullYear();

  return (
    <div className="bg-slate-700 w-full">
      <footer className="py-6 text-center">
        <p className="text-green-700 text-lg">
          &copy; {year} Duncan Ramuhashi. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footing;
