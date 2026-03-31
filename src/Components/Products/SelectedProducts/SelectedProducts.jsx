import React from 'react';

const SelectedProducts = ({ selectedProducts, handleDelete, setActiveTab }) => {
    return (
        <div className="mt-12 space-y-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Selected Tools ({selectedProducts.length})</h2>
                <button 
                    onClick={() => setActiveTab('available')} 
                    className="btn btn-sm btn-outline"
                >
                    Add More
                </button>
            </div>
            
            {selectedProducts.length === 0 ? (
                <div className="text-center py-20 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
                    <p className="text-xl opacity-50">Your cart is empty.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {selectedProducts.map((product) => (
                        <div key={product.id} className="flex items-center justify-between p-6 bg-base-100 border border-base-200 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-base-200 rounded-xl flex items-center justify-center text-3xl">🚀</div>
                                <div>
                                    <h3 className="text-xl font-bold">{product.name}</h3>
                                    <p className="text-gray-500">${product.price} / {product.billing}</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => handleDelete(product.id)}
                                className="btn btn-circle btn-ghost text-error"
                                title="Remove Item"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectedProducts;