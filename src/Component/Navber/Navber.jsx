import React from 'react';
import { BsCart } from 'react-icons/bs';

const Navber = () => {
    return (
        <div className=''>
            <div className="navbar lg:px-56 bg-base-100 shadow">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content font-semibold bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>

                        </ul>
                    </div>
                    <a className="text-2xl font-extrabold text-[#4F39F6]">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-semibold px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <BsCart/>
                    <a className="btn btn-ghost">Login</a>
                    <button className='btn text-white bg-linear-to-l from-[#9514FA] to-[#4f39f6] mr-3 rounded-full py-5'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;