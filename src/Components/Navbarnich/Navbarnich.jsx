import React from 'react';

const Navbarnich = () => {
    return (
       
        <div className='flex justify-around items-center bg-gradient-to-r from-primary to-secondary w-full py-6 px-4  text-white shadow-lg mt-10 space-y-2'>
            
          
            <div className='flex flex-col items-center text-center space-y-2'>
                <span className='text-5xl font-bold'>50K+</span>
                <span className='text-2xl opacity-90'>Active Users</span>
            </div>

            <div className='flex flex-col items-center text-center space-y-2'>
                <span className='text-5xl font-bold'>200+</span>
                <span className='text-2xl opacity-90'>Premium Tools</span>
            </div>

            <div className='flex flex-col items-center text-center space-y-2'>
                <span className='text-5xl font-bold'>4.9</span>
                <span className='text-2xl opacity-90'>User Rating</span>
            </div>
            
        </div>
    );
};

export default Navbarnich;