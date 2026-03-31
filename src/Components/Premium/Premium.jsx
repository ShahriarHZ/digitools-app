import React from 'react';
const Premium = ({ setActiveTab, activeTab, cartCount }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20 space-y-6">
      <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
      <p className="max-w-2xl text-base-content/70">Choose from our curated collection...</p>
      
      <div className="flex gap-4">
        <button 
          onClick={() => setActiveTab('available')}
          className={`btn btn-lg ${activeTab === 'available' ? 'bg-primary text-white' : 'btn-outline'}`}
        >
          Products
        </button>
        
        <button 
          onClick={() => setActiveTab('selected')}
          className={`btn btn-lg ${activeTab === 'selected' ? 'bg-primary text-white' : 'btn-outline'}`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default Premium;