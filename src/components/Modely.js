import React from 'react'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'

function Modely() {
    return (
        <div>
            <div className='relative z-10'>
                <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-Y-Main-Hero-Desktop-Global')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center h-screen">
                    <div className='flex flex-col justify-between gap-72 py-48'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl font-semibold text-white'>Model Y</h3>
                            <h3 className='text-md font-semibold text-white cursor-pointer'>View Inventory</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <div className='flex justify-between gap-8 items-center'>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>76 cu ft</h3>
                                    <h3 className='text-white text-xs font-semibold'>Cargo Space</h3>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <h3 className='text-white font-bold text-xl'>330 mi</h3>
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
                <div className=''>
                    <div className="bg-[url('https://www.tesla.com/themes/custom/tesla_frontend/components/images/safety-model-y-hero.png')]
                            bg-contain bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='p-8 flex flex-col gap-1'>
                        <h3 className=' font-bold text-2xl'>Safety</h3>
                        <h3 className=' font-semibold text-xl mb-4'>Designed for safety</h3>
                        <p className=' text-sm mb-4'>Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards.
                        </p>
                        <p className=' text-sm mb-4'><b>5-Star Rating</b> Model Y achieved NHTSA 5-star safety ratings in every category and subcategory.</p>
                        <p className=' text-sm mb-4'><b>Top Safety Pick+</b> Model Y received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.</p>
                    </div>
                    <div className='p-8 flex flex-col gap-1'>
                        <h3 className=' font-bold text-2xl'>Utility</h3>
                        <h3 className=' font-semibold text-xl mb-4'>A Place For Everything</h3>
                        <p className=' text-sm mb-4'>Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/AWD_hero%402-jpg')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='py-8'>
                        <div className='px-8 py-2 flex flex-col gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>All-Wheel Drive</h3>
                            <h3 className='font-semibold text-2xl'>Dual Motor</h3>
                        </div>
                        <div className='px-8'>
                            <p className='text-sm'>Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road. Compare Models</p>
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
                            <p className='text-sm'>Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Model-Y-Interior-Hero-Desktop-LHD')]
                            bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col h-96 border-t-1 border-gray-600"/>
                    <div className='py-8'>
                        <div className='px-8 py-2 flex flex-col gap-1'>
                            <h3 className='font-semibold text-xl text-gray-600'>Interior</h3>
                            <h3 className='font-semibold text-2xl'>Built Aroung the Driver</h3>
                        </div>
                        <div className='px-8'>
                            <p className='text-sm'>With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky. Compare Models</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
            <MobileNavBar />
        </div>
    )
}

export default Modely
