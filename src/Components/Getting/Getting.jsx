import React from 'react';
import UserImg from '../../assets/user.png'
import CubeImg from '../../assets/package.png'
import RocketImg from '../../assets/rocket.png'

const Getting = () => {
    return (
        <div className='flex items-center flex-col space-y-12 py-10'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-gray-500 mt-2'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='flex flex-wrap justify-center gap-8'>
                
                <div className="relative card bg-blue-50 border border-blue-100 w-80 shadow-sm rounded-2xl p-6">
                    <div className="absolute top-4 right-4 bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold shadow-md">
                        01
                    </div>
                    
                    <figure className="pt-6">
                        <img src={UserImg} alt="User" className="w-16 h-16" />
                    </figure>
                    <div className="card-body items-center text-center px-0">
                        <h2 className="card-title font-bold text-blue-900">Create Account</h2>
                        <p className='text-sm text-blue-800/70 text-balance'>Sign up for free in seconds. No credit card required.</p>
                    </div>
                </div>

                <div className="relative card bg-purple-50 border border-purple-100 w-80 shadow-sm rounded-2xl p-6">
                    <div className="absolute top-4 right-4 bg-purple-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold shadow-md">
                        02
                    </div>

                    <figure className="pt-6">
                        <img src={CubeImg} alt="Products" className="w-16 h-16" />
                    </figure>
                    <div className="card-body items-center text-center px-0">
                        <h2 className="card-title font-bold text-purple-900">Choose Products</h2>
                        <p className='text-sm text-purple-800/70 text-balance'>Browse our catalog and select the tools you need.</p>
                    </div>
                </div>

                <div className="relative card bg-orange-50 border border-orange-100 w-80 shadow-sm rounded-2xl p-6">
                    <div className="absolute top-4 right-4 bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold shadow-md">
                        03
                    </div>

                    <figure className="pt-6">
                        <img src={RocketImg} alt="Rocket" className="w-16 h-16" />
                    </figure>
                    <div className="card-body items-center text-center px-0">
                        <h2 className="card-title font-bold text-orange-900">Start Creating</h2>
                        <p className='text-sm text-orange-800/70 text-balance'>Download and start using your tools immediately.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Getting;