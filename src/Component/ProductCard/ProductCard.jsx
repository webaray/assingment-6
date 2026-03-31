import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({product, id, carts, setCarts}) => {
    const [isBuyNow, setBuyNow] = useState(false)

    const handleBuyNow =()=>{
        setBuyNow(true)

        const isFound = carts.find((items) => items.id === product.id)
        if(isFound){
            toast.error("Product already in a cart")
            return;
        }
        setCarts([...carts, product])
        toast.success("Product add to cart")
    }
    return (
        <div>
              <div key={id} className='border p-5 rounded-2xl border-zinc-200 space-y-4 '>

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

                        <button onClick={handleBuyNow} className='btn bg-linear-to-l from-[#9514FA] to-[#4f39f6] text-white w-full rounded-full py-6'>{isBuyNow ? "Add Successfully" : "Buy Now"}</button>


                    </div>
                    
        </div>
    );
};

export default ProductCard;