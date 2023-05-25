import React from 'react'
import MobileNavBar from './MobileNavBar'
import StatyConnectedModelX from '../images/StayConnectedModelX.png'
import SublimeSound from '../images/SublimeSound.png'
import RelentlessModelX from '../images/RentlessModelX.png'
import Optimized from '../images/OptimizedModelX.png'
import Refined from '../images/RefinedModelX.png'
import Footer from './Footer'

function Modelx() {
    return (
        <div>
            <div className='relative z-10'>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-X-Main-Hero-Desktop-LHD')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-72 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold'>Model X</h3>
                            <h3 className='text-md font-semibold'>Plaid</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <div className='flex justify-between gap-8 items-center'>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>333mi</h3>
                                    <h3 className='text-white text-xs font-semibold'>Range(EPA est.)</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>2.5s</h3>
                                    <h3 className='text-white text-xs font-semibold'>0-60 mph*</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>9.9S</h3>
                                    <h3 className='text-white text-xs font-semibold'>1/4 Mile</h3>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <h3 className='bg-white xs:px-32 px-24 py-2 font-semibold rounded-sm cursor-pointer'>Order Now</h3>
                                <h3 className='border-2 border-white text-white xs:px-32 px-24 py-2 font-semibold rounded-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-400'>Demo Drive</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-X-Interior-Hero-Desktop-LHD')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-screen border-t-2 border-gray-600">
                    <h3 className='font-bold text-2xl text-center mt-16'>Interior of the Future</h3>
                </div>
                <div className='bg-black pt-8 flex flex-col md:flex-row md:px-16 lg:px-48'>
                    <img src={StatyConnectedModelX} alt='Stay Connected' className='md:w-[400px] lg:w-[550px] mx-auto my-auto' />
                    <div className='p-8 flex flex-col gap-4'>
                        <h3 className='text-white font-semibold'>Stay Connected</h3>
                        <p className='text-white text-sm'>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                    </div>
                </div>
                <div className='bg-black py-8 flex flex-col md:flex-row md:px-16 lg:px-48'>
                    <img src={SublimeSound} alt='Sublime Sound' className='md:w-[400px] lg:w-[550px] mx-auto my-auto' />
                    <div className='p-8 flex flex-col gap-4'>
                        <h3 className='text-white font-semibold'>Sublime Sound</h3>
                        <p className='text-white text-sm'>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-16 py-8 bg-black md:px-16 lg:px-48 px-8">
                        <div className='flex flex-col'>
                            <h3 className='font-bold text-2xl text-white'>Plaid</h3>
                            <h3 className='text-xl mb-4 text-white'>Beyond Ludicrous</h3>
                        </div>
                        <p className='text-sm mb-4 text-white'>With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. Updated battery architecture enables both Long Range and Plaid configurations to complete back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model X or schedule a demo drive today.</p>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-start md:pl-16 justify-center items-center gap-2 md:gap-6 pb-8 lg:px-48 bg-black'>
                        <h3 className='text-white px-32 md:px-16 py-2 font-semibold border-2 border-white rounded-sm text-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Order Now</h3>
                        <h3 className='text-white bg-gray-700 py-4 px-32 md:px-16 font-semibold rounded-sm text-sm text-center cursor-pointer hover:bg-gray-800 transition-all duration-300'>View Inventory</h3>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start bg-black'>
                    <div className='bg-black py-8 flex flex-col md:flex-row md:px-16 lg:px-48'>
                        <img src={RelentlessModelX} alt='Relentless' className='md:w-[400px] lg:w-[550px] mx-auto my-auto' />
                        <div className='p-8 flex flex-col gap-4'>
                            <h3 className='text-white font-semibold'>Relentless Performance</h3>
                            <p className='text-white text-sm'>Performance wheels and tires keep the SUV planted, transferring even more power down to the road.</p>
                        </div>
                    </div>
                    <div className='bg-black py-8 flex flex-col md:flex-row md:px-16 lg:px-48'>
                        <img src={Optimized} alt='Optimized' className='md:w-[400px] lg:w-[550px] mx-auto my-auto' />
                        <div className='p-8 flex flex-col gap-4'>
                            <h3 className='text-white font-semibold'>Optimized Aerodynamics</h3>
                            <p className='text-white text-sm'>Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth.</p>
                        </div>
                    </div>
                    <div className='bg-black py-8 flex flex-col md:flex-row md:px-16 lg:px-48'>
                        <img src={Refined} alt='Optimized' className='md:w-[400px] lg:w-[550px] mx-auto my-auto' />
                        <div className='p-8 flex flex-col gap-4'>
                            <h3 className='text-white font-semibold'>Refined Styling</h3>
                            <p className='text-white text-sm'>Exterior design combines an iconic look with elegant details.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <MobileNavBar />
        </div>
    )
}

export default Modelx
