import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

const Pakages = () => {
    return (
        <div className='py-30'>

            <div className='container mx-auto'>
                <h2 className='text-5xl font-extrabold text-center'>Simple, Transparent Pricing</h2>
                <p className='text-center mt-4 mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-stretch'>
                    <div className="card  bg-base-100 shadow-sm">
                        <div className="card-body bg-[#F9FAFC] rounded-2xl">
                    
                            <div className="">
                                <h2 className="text-3xl font-bold">Starter</h2>
                                <p className='mt-2 mb-6'>Perfect for getting started</p>
                                <p><span className='text-2xl font-bold'>$0</span>/Month</p>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs mb-14">
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Community support</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>1 project per month</span>
                                </li>
                                
                            </ul>
                            <div className="mt-6">
                                <button className="btn bg-linear-to-l from-[#9514FA] to-[#4f39f6] text-white rounded-full btn-block">Get Started Free</button>
                            </div>
                        </div>
                    </div>

                    <div className="card  bg-base-100 shadow-sm">
                        <div className="card-body bg-linear-to-l from-[#9514FA] to-[#4f39f6] rounded-2xl text-white relative">
                            <span className="badge badge-x badge-warning absolute -top-3 right-48 rounded-full">Most Popular</span>
                            <div className="">
                                <h2 className="text-3xl font-bold">Pro</h2>
                                <p className='mt-2 mb-6'>Best for professionals</p>
                                <p><span className='text-2xl font-bold'>$29</span>/Month</p>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Access to all premium tools</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Unlimited templates</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Priority support</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Unlimited projects</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Cloud sync</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Advanced analytics</span>
                                </li>
                                
                            </ul>
                            <div className="mt-6">
                                <button className="btn bg-white text-linear-to-l from-[#9514FA] to-[#4f39f6] rounded-full btn-block">Start Pro Trial</button>
                            </div>
                        </div>
                    </div>

                    <div className="card  bg-base-100 shadow-sm">
                        <div className="card-body bg-[#F9FAFC] rounded-2xl">
                        
                            <div className="">
                                <h2 className="text-3xl font-bold">Enterprise</h2>
                                <p className='mt-2 mb-6'>For teams and businesses</p>
                                <p><span className='text-2xl font-bold'>$99</span>/Month</p>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Everything in Pro</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Dedicated support</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>SLA guarantee</span>
                                </li>
                                <li>
                                    <IoCheckmark className='inline-block mr-2 text-xl text-green-400' />

                                    <span>Custom branding</span>
                                </li>
                                
                            </ul>
                            <div className="mt-6">
                                <button className="btn bg-linear-to-l from-[#9514FA] to-[#4f39f6] text-white rounded-full btn-block">Contact Sales</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Pakages;