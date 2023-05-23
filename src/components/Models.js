import React from 'react'
import MobileNavBar from './MobileNavBar'
import StayConnected from '../images/StayConnected.png'
import ImmersiveSound from '../images/ImmersiveSound.PNG'
import RoomForEve from '../images/RoomForEve.png'
import Relentless from '../images/Relentless.png'
import Optimized from '../images/Optimized.png'
import Refined from '../images/Refined.png'

function Models() {
    return (
        <div>
            <div className='relative z-10'>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Model-S-homepage-desktop')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-72 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold'>Model S</h3>
                            <h3 className='text-md font-semibold'>Plaid</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <div className='flex justify-between gap-8 items-center'>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>396mi</h3>
                                    <h3 className='text-white text-xs font-semibold'>Range(EPA est.)</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>1.99s</h3>
                                    <h3 className='text-white text-xs font-semibold'>0-60 mph*</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>200mph</h3>
                                    <h3 className='text-white text-xs font-semibold'>Top speed</h3>
                                </div>
                            </div>
                            <div className='flex xs:flex-col gap-4'>
                                <h3 className='bg-white xs:px-32 px-24 py-2 font-semibold rounded-sm cursor-pointer'>Order Now</h3>
                                <h3 className='border-2 border-white text-white xs:px-32 px-24 py-2 font-semibold rounded-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-400'>Demo Drive</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Interior-Hero-Desktop-LHD')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-screen border-t-2 border-white">
                    <h3 className='text-white font-semibold text-2xl text-center mt-16'>Interior of the Future</h3>
                </div>
                <div className='bg-black pt-8 flex flex-col md:flex-row md:px-16 lg:px-48'>
                    <img src={StayConnected} alt='Stay Connected' className='md:w-[400px] lg:w-[550px] mx-auto my-auto' />
                    <div className='p-8 flex flex-col gap-4'>
                        <h3 className='text-white font-semibold'>Stay Connected</h3>
                        <p className='text-white text-sm lg:text-lg'>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                    </div>
                </div>
                <div className='bg-black pt-8 flex flex-col md:flex-row md:px-16 lg:px-48'>
                    <img src={ImmersiveSound} alt='Stay Connected' className='md:w-[400px] lg:w-[550px] mx-auto my-auto' />
                    <div className='p-8 flex flex-col gap-4'>
                        <h3 className='text-white font-semibold'>Immersive Sound</h3>
                        <p className='text-white text-sm lg:text-lg'>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
                    </div>
                </div>
                <div className='bg-black pt-8 flex flex-col md:flex-row md:px-16 lg:px-48'>
                    <img src={RoomForEve} alt='Stay Connected' className='md:w-[400px] lg:w-[550px] mx-auto my-auto' />
                    <div className='p-8 flex flex-col gap-4'>
                        <h3 className='text-white font-semibold'>Room for Everything</h3>
                        <p className='text-white text-sm'>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too. Compare Models</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="bg-black flex flex-col pt-8 px-8 lg:px-48">
                        <h3 className='text-white font-semi text-xl'>Exterior</h3>
                        <h3 className='text-white font-semibold text-2xl md:text-3xl mb-4'>Designed for Efficiency</h3>
                    </div>
                    <p className='text-white bg-black text-sm md:text-lg pb-8 px-8 lg:px-48'>With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.</p>
                </div>
                <div className='bg-black flex flex-col md:flex-row md:justify-start md:pl-8 justify-center items-center gap-2 md:gap-8 pb-8 lg:px-48'>
                    <h3 className='px-32 md:px-16 py-2 font-semibold border-2 border-white text-white bg-black rounded-sm text-center cursor-pointer'>Order Now</h3>
                    <h3 className=' text-white bg-gray-700 py-4 px-32 md:px-16 font-semibold rounded-sm text-sm text-center cursor-pointer'>View Inventory</h3>
                </div>
                <div className='bg-black pt-8 flex flex-col md:flex-row md:px-16 lg:px-48'>
                    <img src={Relentless} alt='Relentless' className='md:w-[400px] lg:w-[550px] mx-auto my-auto' />
                    <div className='p-8 flex flex-col gap-4 lg:mx-20'>
                        <h3 className='text-white font-semibold'>Relentless Performance</h3>
                        <p className='text-white text-sm lg:text-lg'>Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</p>
                    </div>
                </div>
                <div className='bg-black pt-8 flex flex-col md:flex-row md:px-16 lg:px-48'>
                    <img src={Optimized} alt='Optimized' className='md:w-[400px] lg:w-[550px] mx-auto my-auto' />
                    <div className='p-8 flex flex-col gap-4 lg:mx-20'>
                        <h3 className='text-white font-semibold'>Optimized Aerodynamics</h3>
                        <p className='text-white text-sm lg:text-lg'>Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.</p>
                    </div>
                </div>
                <div className='bg-black pb-8 flex flex-col md:flex-row md:px-16 lg:px-48'>
                    <img src={Refined} alt='Refined' className='md:w-[400px] lg:w-[550px] mx-auto my-auto' />
                    <div className='p-8 flex flex-col gap-4 lg:mx-20'>
                        <h3 className='text-white font-semibold'>Refined Styling</h3>
                        <p className='text-white text-sm lg:text-lg'>An iconic silhouette meets refreshed, elegant proportions.</p>
                    </div>
                </div>
                <div>
                    <div className='mt-12 mb-32 flex flex-col md:flex-row justify-center items-center gap-6 text-xs font-semibold'>
                        <p></p>
                        <h3>Tesla © 2023</h3>
                        <h3>Privacy & Legal</h3>
                        <h3>Vehicle Recals</h3>
                        <h3>News</h3>
                    </div>
                </div>
            </div>
            <MobileNavBar />
        </div >
    )
}

export default Models
