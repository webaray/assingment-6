import React from 'react';

const Calltoaction = () => {
    return (
        <div className='bg-linear-to-l from-[#9514FA] to-[#4f39f6] py-32 text-white'>
            <div className='container mx-auto'>
                <h2 className='text-5xl font-extrabold text-center'>Ready to Transform Your Workflow?</h2>
                <p className='text-center mt-4 mb-10'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                <div className='text-center'>
                    <button className='btn bg-white text-purple-500 rounded-full py-6 mr-5'>Explore Product</button>

                    <button className='btn border border-white bg-transparent  text-white rounded-full py-6'>View Pricing </button>
                    <p className='mt-4 text-gray-400'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default Calltoaction;