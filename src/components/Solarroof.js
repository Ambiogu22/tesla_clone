import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel } from '@fortawesome/free-solid-svg-icons'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'

function Solarroof() {
    return (
        <div>
            <div className='relative z-10'>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Solar-Roof-Hero-Desktop-Global')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-72 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold text-white'>Solar Roof</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <div className='flex justify-between gap-8 items-center'>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'><FontAwesomeIcon icon={faSolarPanel} /></h3>
                                    <h3 className='text-white text-xs font-semibold'>0-60 mph*</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>25-Year</h3>
                                    <h3 className='text-white text-xs font-semibold'>Tile Warranty</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>24/7</h3>
                                    <h3 className='text-white text-xs font-semibold'>Outage Protection</h3>
                                </div>
                            </div>
                            <h3 className='text-white border-2 border-white px-32 py-2 font-semibold rounded-sm text-center cursor-pointer'>Order Now</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Solar-Roof-Design-Desktop-Global')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='px-8 md:px-16 py-8 flex items-start flex-col gap-1'>
                        <h3 className=' font-bold text-2xl'>Design</h3>
                        <h3 className='text-gray-600 text-xl mb-4'>Complement Your Home's Aesthetic</h3>
                        <p className=' text-sm md:text-base mb-4'>Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home’s natural styling. Schedule a virtual consultation with a Tesla Advisor to learn more.</p>
                        <h3 className='text-black border-2 border-black px-8 md:px-16 py-2 font-semibold rounded-sm text-center cursor-pointer'>Order Now</h3>
                    </div>
                </div>
                <div>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Solar-Roof-Energy-Desktop-Global')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col  h-96 border-t-1 border-gray-600"/>
                    <div className='py-8 md:p-16'>
                        <div className='px-8 md:px-0 py-2 flex flex-col gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>Energy Storage</h3>
                            <h3 className='font-semibold text-2xl'>Protection Against Outages</h3>
                        </div>
                        <div className='px-8 md:px-0'>
                            <p className='text-sm md:text-base'>Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage.</p>
                        </div>
                    </div>
                </div>
                <div className='pb-8'>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/SR_tesla_app_D')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='py-8 md:p-16'>
                        <div className='px-8 md:px-0 py-2 flex flex-col gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>Control</h3>
                            <h3 className='font-semibold text-2xl'>Monitor and Optimize</h3>
                        </div>
                        <div className='px-8 md:px-0 flex flex-col items-center md:items-start gap-8'>
                            <p className='text-sm'>With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.</p>
                            <h3 className='border-2 border-black px-8 text-sm md:px-16 py-2 font-semibold rounded-sm text-center cursor-pointer'>Order Now</h3>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
            <MobileNavBar />
        </div >
    )
}

export default Solarroof
