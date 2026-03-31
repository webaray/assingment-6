import React, { use } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({ productPromise, setActiveTab, carts, setCarts }) => {
    const products = use(productPromise)
    return (
        <div>
            <div className='space-y-4 mt-32'>
                <h2 className='text-5xl font-extrabold text-center'>Premium Digital Tools</h2>
                <p className='text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className='my-5'>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box justify-center bg-transparent shadow-none ">
                    <input type="radio"
                        name="my_tabs_1"
                        className="tab rounded-full w-40 text-xl font-semibold checked:bg-linear-to-l from-[#9514FA] to-[#4f39f6] checked:text-white"
                        aria-label="Products"
                        defaultChecked
                        onClick={()=> setActiveTab("products")} />

                    <input type="radio"
                        name="my_tabs_1" className="tab rounded-full w-40 text-xl font-semibold checked:bg-linear-to-l from-[#9514FA] to-[#4f39f6] checked:text-white"
                        aria-label={`Cart (${carts.length})` }
                        onClick={()=> setActiveTab("cart")}
                    />
                </div>
            </div>

            <div className='container my-20 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 rounded-2xl'>

                {
                    products.map((product) => 
                    
                 <ProductCard product={product} carts={carts} setCarts={setCarts} />
                
                )
            }
            </div>


        </div>
    );
};

export default Products;