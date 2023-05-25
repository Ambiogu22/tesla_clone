import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faFan } from '@fortawesome/free-solid-svg-icons'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'

function Powerwall() {
    return (
        <div>
            <div className='relative z-10'>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/PW_Inverter_Backup_D')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-72 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-3xl font-semibold text-white'>Powerwall</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <div className='flex justify-between gap-8 items-center'>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'><FontAwesomeIcon icon={faBolt} /></h3>
                                    <h3 className='text-white text-xs font-bold'>Energy Storage</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>24/7</h3>
                                    <h3 className='text-white text-xs font-bold'>Outage Protection</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'><FontAwesomeIcon icon={faLightbulb} /></h3>
                                    <h3 className='text-white text-xs font-bold'>Outage Protection</h3>
                                </div>
                            </div>
                            <h3 className='text-white border-2 border-white px-32 py-2 font-semibold rounded-sm text-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Order Now</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Powerwall-Security-Desktop-Global')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-72 py-48'>
                        <div className='flex flex-col items-center justify-center gap-72'>
                            <div className='flex justify-between gap-8 items-center'>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'><FontAwesomeIcon icon={faLightbulb} /></h3>
                                    <h3 className='text-white text-xs font-bold'>Energy Outages</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'><FontAwesomeIcon icon={faBolt} /></h3>
                                    <h3 className='text-white text-xs font-bold'>Recharge With Solar</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'><FontAwesomeIcon icon={faFan} /></h3>
                                    <h3 className='text-white text-xs font-bold'>Appliances Running</h3>
                                </div>
                            </div>
                            <h3 className='text-white border-2 border-white px-32 py-2 font-semibold rounded-sm text-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Order Now</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='p-8 flex flex-col justify-center items-center md:justify-start md:items-start gap-1 md:mx-16'>
                        <h3 className=' font-bold text-2xl'>Secutiry</h3>
                        <h3 className='text-gray-600 text-xl mb-4'>Backup Protection</h3>
                        <p className=' text-sm mb-4 text-center md:text-left'>Powerwall is an integrated battery system that stores your solar energy for backup protection, so when the grid goes down your power stays on. Your system detects outages and automatically recharges with sunlight to keep your appliances running for days.</p>
                        <h3 className='border-2 border-black px-28 md:px-16 py-2 font-semibold rounded-sm text-center cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>Order Now</h3>
                    </div>
                </div>
                <div>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/PW_tesla_app_D')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='py-8 flex flex-col justify-center items-center md:justify-start md:items-start gap-1 md:mx-16'>
                        <div className='px-8 py-2 flex flex-col justify-center items-center md:justify-start md:items-start gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>Control</h3>
                            <h3 className='font-semibold text-2xl'>Monitor and Optimize</h3>
                        </div>
                        <div className='px-8'>
                            <p className='text-sm text-center md:text-left'>With the Tesla app, you can monitor your solar energy in real time. Set your preferences to optimize for energy independence, outage protection or savings. Control your system from anywhere with remote access and instant alerts.</p>
                        </div>
                    </div>
                </div>
                <div className='pb-8'>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/PW_Inverter_Design_D')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='py-8 md:mx-16 flex flex-col justify-center items-center md:justify-start md:items-start gap-4'>
                        <div className='px-8 py-2 flex flex-col justify-center items-center md:justify-start md:items-start'>
                            <h3 className='font-semibold text-xl text-gray-600'>Design</h3>
                            <h3 className='font-semibold text-2xl'>Modern and Compact</h3>
                        </div>
                        <div className='px-8 flex flex-col gap-6 justify-center items-center md:justify-start md:items-start'>
                            <p className='text-sm text-center md:text-left'>With easy installation and a minimalist design, Powerwall complements a variety of home styles and solar systems. The compact, all-in-one construction features versatile mounting options for indoor or outdoor spaces. Chat with an energy advisor to ask any questions about Tesla Powerwall.</p>
                            <h3 className='border-2 border-black px-28 md:px-16 py-2 font-semibold rounded-sm text-center  cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>Order Now</h3>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
            <MobileNavBar />
        </div>
    )
}

export default Powerwall
