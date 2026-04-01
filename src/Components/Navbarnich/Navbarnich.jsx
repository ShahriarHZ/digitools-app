import React from 'react';

const Navbarnich = () => {
    return (
       
       <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full py-6 px-4 bg-linear-to-r from-primary to-secondary text-white shadow-lg">
            
          
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