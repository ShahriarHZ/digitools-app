import React from 'react';
import bannerImg from '../../assets/banner.png';
import putuliImg from '../../assets/putuli.png';
import vectorImg from '../../assets/vector.png';

const Header = () => {
    return (
        <div className="mt-13 w-11/12 mx-auto flex items-center justify-between ">
            <div className='space-y-5'>
                
                <button className='btn bg-white rounded-2xl text-blue-400'><img src={putuliImg} alt="" />New: AI-Powered Tools Available</button>
                <h1 className='text-5xl font-bold'>Supercharge Your <br />Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today <br />

Explore Products</p>
<div>
    <button className='btn rounded-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Explore Products</button>
    <button className='btn rounded-2xl'><img src={vectorImg} alt="" />Watch Demo</button>
</div>
            </div>
            <img 
                src={bannerImg} 
                alt="DigiTools Hero Banner" 
                />
        </div>
    );
};

export default Header;