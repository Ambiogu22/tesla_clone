import React from 'react'
import NavLogo from '../images/teslalogo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../App'

function NavBar() {
    const { menu, setMenu } = useContext(Context)
    return (
        <div>
            <div className='relative z-30 w-screen'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-1 py-4 md:py-4 md:w-screen'>
                    <p className='sans-serif text-gray-600 text-[12px] font-bold'>Up to $7,500 tax credit available for Model Y and Model 3. </p>
                    <h3 className='underline text-gray-600 cursor-pointer font-bold hover:text-black text-[12px]'> Learn More</h3>
                </div>
                <div className='flex justify-between py-4 md:py-5 px-6 md:px-12 lg:bg-white'>
                    <div>
                        <a href='/'><img src={NavLogo} alt='Logo' className='md:w-28 w-24 py-2 ' /></a>
                    </div>
                    <div className='lg:flex gap-8 font-bold hidden'>
                        <Link to='/models'>Model S</Link>
                        <Link to='/model3'>Model 3</Link>
                        <Link to='/modelx'>Model X</Link>
                        <Link to='/modely'>Model Y</Link>
                        <Link to='/solarroof'>Solar Roof</Link>
                        <Link to='/solarpanels'>Solar Panels</Link>
                        <Link to='/powerwall'>Powerwall</Link>
                    </div>
                    <div className='lg:hidden flex'>
                        <h3 className='px-5 py-1 backdrop-blur-sm bg-white/30 rounded-md font-semibold md:font-bold' onClick={() => { setMenu(!menu) }}>Menu</h3>
                    </div>
                    <div className='lg:flex justify-center items-center font-bold gap-6 hidden'>
                        <Link to='/shop'>Shop</Link>
                        <Link to='/'>Account</Link>
                        <Link to='/'>Menu</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavBar
