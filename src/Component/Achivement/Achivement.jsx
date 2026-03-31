import React from 'react';

const Achivement = () => {
    return (
        <div className='bg-linear-to-l from-[#9514FA] to-[#4f39f6] py-20 '>
            <div className='container lg:flex md:flex justify-around mx-auto '>
                <div className='space-y-3 text-center'>
                    <h2 className='text-6xl font-extrabold text-white'>50k+</h2>
                    <p className='text-2xl text-white font-medium'>Active Users</p>
                </div>
                
                <div className='space-y-3 text-center my-8'>
                    <h2 className='text-6xl font-extrabold text-white'>200+</h2>
                    <p className='text-2xl text-white font-medium'>Premium Tools</p>
                </div>
                <div className='space-y-3 text-center'>
                    <h2 className='text-6xl font-extrabold text-white'>4.9</h2>
                    <p className='text-2xl text-white font-medium'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Achivement;