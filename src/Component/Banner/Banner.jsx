import React from 'react';
import bannerImage from '../../assets/banner.png'
import { FaCircle } from 'react-icons/fa';
import { IoPlayOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className='flex mx-auto container justify-between my-24'>
            <div className='flex flex-col justify-center'>
                <div className='flex gap-1 items-center  bg-[#E1E7FF] p-1 rounded-2xl w-72 '>
                    <FaCircle />
                    <p className='text-[#4F39F6]'> New: AI-Powered Tools Available</p>
                </div>
                <div>
                    <h1 className='text-7xl font-extrabold leading-20'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='text-[18px] leading-6 my-4 text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products
                    </p>
                </div>
                <div className='mt-4'>
                    <button className='btn text-white bg-linear-to-l from-[#9514FA] to-[#4f39f6] mr-3 rounded-full py-6'>Explore Products</button>
                    <button className='btn rounded-full border border-[#4F39F6] py-6'> <IoPlayOutline/> Watch Demo</button>
                </div>
            </div>

            <div>
                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;