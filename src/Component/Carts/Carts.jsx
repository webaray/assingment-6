import React from 'react';

const Carts = ({ setActiveTab, carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, items) => sum + items.price, 0 )

    const handlePayment = () => {
        setCarts([])
    }
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
                        onClick={() => setActiveTab("products")} />

                    <input type="radio"
                        name="my_tabs_1" className="tab rounded-full w-40 text-xl font-semibold checked:bg-linear-to-l from-[#9514FA] to-[#4f39f6] checked:text-white"
                        aria-label="Cart"
                        onClick={() => setActiveTab("cart")}
                    />
                </div>
            </div>

            <div className='container mx-auto p-20'>
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>

                    {
                        carts.length === 0 ? <div className='h-32 bg-amber-50 flex flex-col justify-center text-center rounded-2xl'><p className='text-xl text-zinc-400'>Cart is empty</p></div> : 

                        <>
                        
                    <div className='space-y-3'>
                        {
                            carts.map((items => <div key={items.id} className='border border-zinc-200 rounded-2xl p-4 bg-[#F9FAFC] '>

                                <div className='flex justify-between mx-auto items-center'>
                                    <div className='flex gap-3 items-center'>
                                        <img className='h-15 bg-zinc-200 p-3 rounded-full' src={items.icon} alt="" />
                                        <div>
                                            <h2 className='font-semibold text-[20px]'>{items.name}</h2>
                                            <p className='text-gray-400'>${items.price} </p>
                                        </div>
                                    </div>

                                    <div>
                                        <button className='btn btn-ghost text-red-500'>Remove</button>
                                    </div>

                                </div>

                            </div>))
                        }
                    </div>
                    <div className='flex mx-auto justify-between items-center px-4 mt-3'>
                        <div className='text-zinc-400'>Total</div>
                        <div className='text-black font-medium'>${totalPrice}</div>
                    </div>

                    <button onClick={handlePayment} className='btn w-full rounded-2xl mt-8 bg-linear-to-l from-[#9514FA] to-[#4f39f6] text-white'>Proceed to Checkout</button>
                        
                        </>
                    }



                </div>
            </div>

        </div>
    );
};

export default Carts;