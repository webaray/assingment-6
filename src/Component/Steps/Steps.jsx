import React from 'react';
import { AiOutlineProduct } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { LuRocket } from 'react-icons/lu';

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC] py-32'>

            <div className='container mx-auto'>
            <h2 className='lg:text-5xl text-3xl font-extrabold text-center'>Get Started in 3 Steps</h2>
            <p className='text-center mt-4 mb-10'>Start using premium digital tools in minutes, not hours.</p>
            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 px-3 gap-8'>
                    <div className="card bg-base-100 shadow-sm">
                    
                        <div className="card-body items-center text-center py-20 relative">
                            <FiUser className='bg-purple-100 p-2 text-5xl rounded-full text-purple-500' />

                            <h2 className="card-title text-2xl">Create Account</h2>
                            <p>Sign up for free in seconds. No credit card <br /> required to get started.</p>

                            <span className='bg-purple-700 px-2 py-1 rounded-full text-white font-medium absolute top-4 right-4'>01</span>
                            
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                    
                        <div className="card-body items-center text-center py-20 relative">
                            <AiOutlineProduct className='bg-purple-100 p-2 text-5xl rounded-full text-purple-500' />

                            <h2 className="card-title text-2xl">Choose Products</h2>
                            <p>Browse our catalog and select the tools <br /> that fit your needs.</p>

                            <span className='bg-purple-700 px-2 py-1 rounded-full text-white font-medium absolute top-4 right-4'>02</span>
                            
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                    
                        <div className="card-body items-center text-center py-20 relative">
                            <LuRocket className='bg-purple-100 p-2 text-5xl rounded-full text-purple-500' />

                            <h2 className="card-title text-2xl">Start Creating</h2>
                            <p>Download and start using your premium <br /> tools immediately.</p>

                            <span className='bg-purple-700 px-2 py-1 rounded-full text-white font-medium absolute top-4 right-4'>03</span>
                            
                        </div>
                    </div>
                    
                </div>
            </div>

            </div>
        </div>
    );
};

export default Steps;