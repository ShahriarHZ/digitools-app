import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Navbarnich from './Components/Navbarnich/Navbarnich';
import Premium from './Components/Premium/Premium';
import Products from './Components/Products/Products';
import Getting from './Components/Getting/Getting';
import Simple from './Components/Simple/Simple';
import Ready from './Components/Ready/Ready';
import Footer from './Components/Footer/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState('available');
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleBuyNow = (product) => {
    const isExist = selectedProducts.find(p => p.id === product.id);
    
    if (!isExist) {
      setSelectedProducts([...selectedProducts, product]);
      setCartCount(cartCount + 1);
      
      toast.success(`🚀 ${product.name || 'Tool'} added to cart!`, {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      toast.warn("This tool is already in your cart!", {
        position: "top-center",
      });
    }
  };

  const handleDelete = (id) => {
    const productToDelete = selectedProducts.find(p => p.id === id);
    const remaining = selectedProducts.filter(p => p.id !== id);
    
    setSelectedProducts(remaining);
    setCartCount(cartCount - 1);
    toast.error(`${productToDelete?.name || 'Item'} removed from cart`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <main className="flex-grow">
        <div className="w-11/12 max-w-7xl mx-auto">
          <Navbar cartCount={cartCount} />
          <Header />
        </div>

        <Navbarnich />

        <div className="w-11/12 max-w-7xl mx-auto">
          <Premium
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            cartCount={cartCount}
          />
          <Products
            activeTab={activeTab}
            handleBuyNow={handleBuyNow}
            selectedProducts={selectedProducts}
            handleDelete={handleDelete}
          />
          <Getting />
          <Simple />
        </div>
        <Ready />
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;