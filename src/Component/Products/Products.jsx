import React, { use } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Products = ({ productPromise }) => {
    const products = use(productPromise)
    console.log(products);
    return (
        <div>
            <div className='space-y-4 mt-32'>
                <h2 className='text-5xl font-extrabold text-center'>Premium Digital Tools</h2>
                <p className='text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className='my-5'>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box justify-center bg-transparent ">
                    <input type="radio"
                        name="my_tabs_1"
                        className="tab rounded-full w-40 text-xl font-semibold checked:bg-linear-to-l from-[#9514FA] to-[#4f39f6] checked:text-white"
                        aria-label="Products"
                        defaultChecked />

                    <input type="radio"
                        name="my_tabs_1" className="tab rounded-full w-40 text-xl font-semibold checked:bg-linear-to-l from-[#9514FA] to-[#4f39f6] checked:text-white"
                        aria-label="Cart"
                    />
                </div>
            </div>

            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 rounded-2xl'>

                {
                    products.map((product, id) => <div key={id} className='border p-5 rounded-2xl border-zinc-200 space-y-4   '>

                        <div>
                            <img className='bg-gray-100 border border-zinc-200 p-2 rounded-full' src={product.icon} alt="" />
                        </div>

                        <div className='space-y-4'>
                            <h2 className='text-2xl font-bold'>{product.name}</h2>
                            <p>{product.description}</p>
                        </div>

                        <div className='flex items-center'>
                            <p className='text-2xl font-bold'>${product.price}/</p>
                            <p>{product.period}  </p>
                        </div>
                        <div>
                            <ul className="space-y-2 mt-4">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-600">
                                        ✅ <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className='btn bg-linear-to-l from-[#9514FA] to-[#4f39f6] text-white w-full rounded-full py-6'>Buy Now</button>


                    </div>)
                }
            </div>


        </div>
    );
};

export default Products;