import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel } from '@fortawesome/free-solid-svg-icons'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'


function Solarpanels() {
    return (
        <div>
            <div className='relative z-10'>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_Hero_D_001')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-96 py-48'>
                        <div className='flex flex-col justify-center items-center px-16 text-center'>
                            <h3 className='text-3xl font-semibold text-black'>Solar Panels for Your Home</h3>
                            <h3 className='text-md font-semibold text-black border-b border-black cursor-pointer'>Schedule a Virtual Consultation</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <div className='flex justify-between gap-8 items-center'>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-black md:text-white font-bold text-xl'><FontAwesomeIcon icon={faSolarPanel} /></h3>
                                    <h3 className='text-black md:text-white text-xs font-bold'>0-60 mph*</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-black md:text-white font-bold text-xl'>25-Year</h3>
                                    <h3 className='text-black md:text-white text-xs font-bold'>Tile Warranty</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-black md:text-white font-bold text-xl'>24/7</h3>
                                    <h3 className='text-black md:text-white text-xs font-bold'>Outage Protection</h3>
                                </div>
                            </div>
                            <h3 className='text-white border-2 border-white px-32 py-2 font-semibold rounded-sm text-center cursor-pointer'>Order Now</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='p-8 flex flex-col justify-center items-center md:justify-start md:items-start gap-1'>
                        <h3 className=' font-bold text-2xl'>Savings</h3>
                        <h3 className='text-gray-600 text-xl mb-4'>Electricity For Less</h3>
                        <p className=' text-sm mb-4 text-center md:text-left'>Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill. Schedule a virtual consultation with a Tesla Advisor to learn more.</p>
                        <h3 className='border-2 border-black px-28 py-2 font-semibold rounded-sm text-center cursor-pointer'>Order Now</h3>

                    </div>
                </div>
                <div>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2090,c_fit,f_auto,q_auto:best/425_Design_D')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 lg:h-screen border-t-1 border-gray-600"/>
                    <div className='py-8 lg:py-16 lg:px-48'>
                        <div className='px-8 py-2 flex flex-col justify-center items-center md:justify-start md:items-start gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>Design</h3>
                            <h3 className='font-semibold text-2xl'>Sleek and Durable</h3>
                        </div>
                        <div className='px-8'>
                            <p className='text-sm text-center md:text-left'>Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic. Schedule a virtual consultation with a Tesla Advisor to learn more.</p>
                        </div>
                    </div>
                </div>
                <div className='pb-8'>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/PW_Inverter_Hero_D_002')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 lg:h-screen border-t-1 border-gray-600"/>
                    <div className='py-8 lg:px-48'>
                        <div className='px-8 py-2 flex flex-col justify-center items-center md:justify-start md:items-start gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>Powerwall</h3>
                            <h3 className='font-semibold text-2xl'>Home Battery Backup</h3>
                        </div>
                        <div className='px-8 flex flex-col justify-center items-center md:justify-start md:items-start gap-4'>
                            <p className='text-sm'>Your Powerwall can be bundled with solar, allowing you to generate clean energy and store it for use anytime—at night or during an outage.</p>
                            <h3 className='border-2 border-black px-28 md:px-16 py-2 font-semibold rounded-sm text-center cursor-pointer'>Order Now</h3>
                        </div>
                    </div>
                </div>
                <div className='pb-8'>
                    <div className="bg-[url('https://www.tesla.com/sites/default/files/solarpanels/inverter/Inverter_V8_D.jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 lg:h-screen border-t-1 border-gray-600"/>
                    <div className='py-8 lg:px-48'>
                        <div className='px-8 py-2 flex flex-col justify-center items-center md:justify-start md:items-start gap-1 '>
                            <h3 className='font-semibold text-xl text-gray-600'>Efficiency</h3>
                            <h3 className='font-semibold text-2xl'>Maximum Solar Production</h3>
                        </div>
                        <div className='px-8 flex flex-col justify-center items-center md:justify-start md:items-start gap-4'>
                            <p className='text-sm'>Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, even on roofs with complicated angles. Powered by Tesla Solar Inverter, your fully integrated system is safe and reliable.</p>
                            <h3 className='border-2 border-black px-28 md:px-16 py-2 font-semibold rounded-sm text-center cursor-pointer'>Order Now</h3>
                        </div>
                    </div>
                </div>
                <div className='pb-8'>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/SP_tesla_app_D')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-96 lg:h-screen border-t-1 border-gray-600"/>
                    <div className='py-8 lg:px-48'>
                        <div className='px-8 py-2 flex flex-col justify-center items-center md:justify-start md:items-start gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>Experience</h3>
                            <h3 className='font-semibold text-2xl'>24/7 Monitoring</h3>
                        </div>
                        <div className='px-8 flex flex-col justify-center items-center md:justify-start md:items-start gap-4'>
                            <p className='text-sm'>Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Watch your energy in real time or set your preferences to optimize for energy independence.</p>
                            <h3 className='border-2 border-black px-28 md:px-16 py-2 font-semibold rounded-sm text-center cursor-pointer'>Order Now</h3>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
            <MobileNavBar />
        </div>
    )
}

export default Solarpanels
