import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className=' container mx-auto '>
                <footer className="footer sm:footer-horizontal text-white pt-32 pb-20 ">
                    <aside>
                        <h1 className='text-3xl font-extrabold mb-4'>DigiTools</h1>
                        <p>
                            Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                        </p>
                    </aside>
                    <nav className='space-y-4'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='space-y-4'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='space-y-4'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>

                    <div className='space-y-4'>
                        <h6 className='footer-title'>Social Links</h6>
                        <div className='flex gap-3 text-4xl text-black'>
                            <FaFacebook className='bg-white p-2 rounded-full' />
                            <AiFillInstagram className='bg-white p-1 rounded-full' />
                            <FaXTwitter className='bg-white p-1 rounded-full' />

                        </div>
                    </div>
                </footer>
                <div className='pb-5'>
                     <div className="divider divider-accent  "></div>
                    <div className='lg:flex mx-auto gap-4  justify-between'>
                        <div>
                            <h2 className='text-white'>© 2026 Js Josim. All rights reserved.</h2>
                        </div>

                        <ul className='text-white flex gap-10 '>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookies</li>

                        </ul>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;