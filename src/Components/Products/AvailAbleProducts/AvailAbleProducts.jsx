import React, { useEffect, useState } from 'react';

const AvailAbleProducts = ({ handleBuyNow }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error:", err));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-20">
            {products.map((product) => (
                <div key={product.id} className="card bg-base-100 border border-base-200 shadow-sm relative p-2">
                    <div className="absolute top-4 right-4">
                        <span className="badge badge-secondary py-3 px-4">{product.badge}</span>
                    </div>

                    <div className="card-body">
                        <div className="w-8 h-8 bg-base-200 rounded-xl flex items-center justify-center text-2xl mb-2"><img 
    src={product.image} 
    alt={product.name} 
    className="w-full h-full object-cover" 
  /></div>
                        <h2 className="card-title text-2xl font-bold">{product.name}</h2>
                        <p className="text-gray-500 text-sm min-h-16">{product.description}</p>
                        
                        <div className="flex items-baseline gap-1 my-4">
                            <span className="text-3xl font-bold">${product.price}</span>
                            <span className="text-gray-400 text-sm">/{product.billing}</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {product.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-500 font-bold">✓</span> {f}
                                </li>
                            ))}
                        </ul>

                        <button 
                            onClick={() => handleBuyNow(product)}
                            className="btn w-full bg-linear-to-r from-purple-600 to-blue-500 text-white border-none rounded-2xl"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AvailAbleProducts;