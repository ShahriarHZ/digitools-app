import React from 'react';
import AvailAbleProducts from './AvailAbleProducts/AvailAbleProducts'; 
import SelectedProducts from './SelectedProducts/SelectedProducts';   

const Products = ({ activeTab, handleBuyNow, selectedProducts, handleDelete, setActiveTab }) => {
    return (
        <div className="mt-10">
            {activeTab === 'available' ? (
                <AvailAbleProducts handleBuyNow={handleBuyNow} />
            ) : (
                <SelectedProducts 
                    selectedProducts={selectedProducts} 
                    handleDelete={handleDelete} 
                    setActiveTab={setActiveTab}
                />
            )}
        </div>
    );
};

export default Products;