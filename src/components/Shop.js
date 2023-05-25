import React from 'react'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'

function Shop() {
    return (
        <div>
            <div className='relative z-10'>
                <div className="bg-[url('https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Chill_banner_web.jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-72 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold text-white'>Chill Collection</h3>
                            <h3 className='text-md font-semibold text-white'>Premium comfort for every season</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Shop Now</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MS_web.jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-48 py-48'>
                        <div className='flex flex-col justify-center  items-center'>
                            <h3 className='text-4xl font-semibold text-white'>Model S Accesories</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Shop Now</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/M3_web.jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-32 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold text-white'>Model 3 Accesories</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Shop Now</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MX_web.jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-32 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold text-white'>Model X Accesories</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Shop Now</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MY_web.jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-28 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold text-white'>Model Y Accesories</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Shop Now</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Charging_web.jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-32 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold text-white'>Charging</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Shop Now</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row py-8 justify-center items-center gap-4 bg-gray-200'>
                    <div className="bg-[url('https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Men_web.jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen rounded-md">
                        <div className='flex flex-col py-48 relative'>
                            <div className='flex flex-col justify-center items-center'>
                                <h3 className='text-4xl md:text-3xl font-semibold absolute bottom-0'>Men's Apparel</h3>
                                <h3 className='bg-white px-16 mx-16 py-2 font-semibold border border-black rounded-md cursor-pointer'>Shop Now</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Women_web.jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen rounded-md">
                        <div className='flex flex-col py-48 relative'>
                            <div className='flex flex-col justify-center items-center'>
                                <h3 className='text-4xl md:text-3xl font-semibold absolute bottom-0'>Women's Apparel</h3>
                                <h3 className='bg-white px-16 mx-16 py-2 font-semibold border border-black rounded-md cursor-pointer'>Shop Now</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Kids_web.jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen rounded-md">
                        <div className='flex flex-col py-48 relative'>
                            <div className='flex flex-col justify-center items-center'>
                                <h3 className='text-4xl md:text-3xl font-semibold absolute bottom-0'>Kids' Apparel</h3>
                                <h3 className='bg-white px-16 mx-16 py-2 font-semibold border border-black rounded-md cursor-pointer'>Shop Now</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Lifestyle_web.jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen rounded-md">
                    <div className='flex flex-col py-48 relative'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold absolute bottom-0'>Life Style</h3>
                            <h3 className='bg-white px-16 mx-16 py-2 font-semibold border border-black rounded-md cursor-pointer'>Shop Now</h3>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <MobileNavBar />
        </div>
    )
}

export default Shop
