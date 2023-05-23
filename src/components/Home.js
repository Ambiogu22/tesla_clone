import React from 'react'
import MobileNavBar from './MobileNavBar'

function Home() {
    return (
        <div>
            <div className='relative z-10'>
                <div className="bg-[url('https://images.unsplash.com/photo-1572191267783-5618f992aff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1264&q=80')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-scree">
                    <div className='flex flex-col justify-between gap-96 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-bold text-white'>Experience Tesla</h3>
                            <h3 className='text-xl text-white'>Schedule a Demo Drive Today</h3>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h3 className='text-white border-2 border-white px-32 py-1 font-semibold rounded-sm cursor-pointer'>Demo Drive</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-scree">
                    <div className='flex flex-col justify-between gap-96 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold'>Model 3</h3>
                            <h3 className='text-md underline underline-offset-4 font-light cursor-pointer'>View Inventory</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-gray-700 text-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Order Now</h3>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Demo Drive</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-scree">
                    <div className='flex flex-col justify-between gap-96 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold'>Model Y</h3>
                            <h3 className='text-md underline underline-offset-4 font-light cursor-pointer'>View Inventory</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-gray-700 text-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Order Now</h3>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Demo Drive</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Model-S-homepage-desktop')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-scree">
                    <div className='flex flex-col justify-between gap-96 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold'>Model S</h3>
                            <h3 className='text-md underline underline-offset-4 font-light cursor-pointer'>View Inventory</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-gray-700 text-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Order Now</h3>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Demo Drive</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-scree">
                    <div className='flex flex-col justify-between gap-96 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold'>Model X</h3>
                            <h3 className='text-md underline underline-offset-4 font-light cursor-pointer'>View Inventory</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-gray-700 text-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Order Now</h3>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Demo Drive</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-scree">
                    <div className='flex flex-col justify-between gap-96 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold'>Solar Panels</h3>
                            <h3 className='text-md font-light'>Lowest Cost Solar Panels in America</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-gray-800 text-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Order Now</h3>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Learn More</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-scree">
                    <div className='flex flex-col justify-between gap-96 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold'>Solar Roof</h3>
                            <h3 className='text-md font-light'>Produce Clean Energy From Your Roof</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h3 className='bg-gray-800 text-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Order Now</h3>
                            <h3 className='bg-white px-32 py-2 font-semibold rounded-sm cursor-pointer'>Learn More</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mt-12 mb-32 flex flex-col md:flex-row justify-center items-center gap-6 text-xs font-semibold'>
                        <h3>Tesla © 2023</h3>
                        <h3>Privacy & Legal</h3>
                        <h3>Vehicle Recals</h3>
                        <h3>News</h3>
                    </div>
                </div>

            </div>
            <MobileNavBar />
        </div>

    )
}

export default Home
