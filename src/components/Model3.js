import React from 'react'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'
import InteriorModel3 from '../images/InteriorModel3.png'

function Model3() {
    return (
        <div>
            <div className='relative z-10'>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1708,w_2560,c_fit,f_auto,q_auto:best/Model-3-Main-Hero-Desktop-LHD_001')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-72 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold text-white'>Model 3</h3>
                            <h3 className='text-md font-semibold text-white cursor-pointer'>View Inventory</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <div className='flex justify-between gap-8 items-center'>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>3.1s</h3>
                                    <h3 className='text-white text-xs font-semibold'>0-60 mph*</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>325+mi</h3>
                                    <h3 className='text-white text-xs font-semibold'>Range (est.)</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>AWD</h3>
                                    <h3 className='text-white text-xs font-semibold'>Dual Motor</h3>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <h3 className='bg-white xs:px-32 px-24 py-2 font-semibold rounded-sm cursor-pointer'>Order Now</h3>
                                <h3 className='border-2 border-white text-white xs:px-32 px-24 py-2 font-semibold rounded-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-400'>Demo Drive</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/model-3-hero-a-desktop')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='p-8 flex flex-col gap-1 lg:mx-32'>
                        <h3 className=' font-bold text-2xl lg:text-3xl'>Safety</h3>
                        <h3 className=' font-semibold text-xl lg:text-2xl mb-4'>Built for safety</h3>
                        <p className=' text-sm md:text-base mb-4'>Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards.</p>
                        <div className='flex flex-col md:flex-row px-2 gap-4'>
                            <p className=' text-sm md:text-base mb-4'><b>5-Star Rating</b> Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.</p>
                            <p className=' text-sm md:text-base mb-4'><b>Top Safety Pick+</b> Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1440,w_2560,c_fit,f_auto,q_auto:best/Model-3-Performance-Hero-Desktop-LHD_001')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='py-8'>
                        <div className='px-8 py-2 flex flex-col gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>Performance</h3>
                            <h3 className='font-semibold text-2xl'>Quickest Acceleration</h3>
                        </div>
                        <div className='px-8'>
                            <p className='text-sm'>Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds. Chat with a Tesla Advisor to learn more about Model 3 or schedule a demo drive today.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1600,w_2560,c_fit,f_auto,q_auto:best/Model-3-AWD-Hero-Desktop-LHD_001')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='py-8'>
                        <div className='px-8 py-2 flex flex-col gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>All-Wheel Drive</h3>
                            <h3 className='font-semibold text-2xl'>Dual Motor</h3>
                        </div>
                        <div className='px-8'>
                            <p className='text-sm'>Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2204,w_2560,c_fit,f_auto,q_auto:best/Model-3-Range-Hero-Desktop-LHD')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='py-8'>
                        <div className='px-8 py-2 flex flex-col gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>Range</h3>
                            <h3 className='font-semibold text-2xl'>Go Anywhere</h3>
                        </div>
                        <div className='px-8'>
                            <p className='text-sm'>Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 45,000 Superchargers worldwide, with six new locations opening every week. Chat with a Tesla Advisor to learn more about Model 3 or schedule a demo drive today.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Autopilot-Hero-Vision_Desktop')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='py-8'>
                        <div className='px-8 py-2 flex flex-col gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>Autopilot</h3>
                            <h3 className='font-semibold text-2xl'>Future of Driving</h3>
                        </div>
                        <div className='px-8'>
                            <p className='text-sm'>Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving. Chat with a Tesla Advisor to learn more about Model 3 or schedule a demo drive today.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={InteriorModel3} alt='Interior Model 3' />
                    <div className='py-16 px-8 flex flex-col lg:flex-row gap-4 md:px-16 lg:px-32'>
                        <h3 className='font-semibold text-2xl'>Built Around the Driver</h3>
                        <p className='text-sm lg:px-16'>The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.</p>
                    </div>
                </div>
                <Footer />
            </div >
            <MobileNavBar />
        </div >
    )
}

export default Model3
