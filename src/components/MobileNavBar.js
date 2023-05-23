import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function MobileNavBar() {
    const { menu, setMenu } = useContext(Context)
    return (
        <div>
            {menu && <div className='fixed z-50 bg-white top-0 right-0 pr-48  gap-12 ease-in transition-all duration-300 '>
                <div className='h-screen'>
                    <FontAwesomeIcon icon={faXmark} size='xl' className='absolute right-0 mr-8' onClick={() => { setMenu(!menu) }} />
                    <div className='flex flex-col gap-8 ml-8 mt-12 py-12'>
                        <Link to='/models' onClick={() => { setMenu(!menu) }}>Model S</Link>
                        <Link to='/model3' onClick={() => { setMenu(!menu) }}>Model 3</Link>
                        <Link to='/modelx' onClick={() => { setMenu(!menu) }}>Model X</Link>
                        <Link to='/modely' onClick={() => { setMenu(!menu) }}>Model Y</Link>
                        <Link to='/solarroof' onClick={() => { setMenu(!menu) }}>Solar Roof</Link>
                        <Link to='/solarpanels' onClick={() => { setMenu(!menu) }}>Solar Panels</Link>
                        <Link to='/powerwall' onClick={() => { setMenu(!menu) }}>Powerwall</Link>
                        <Link to='/shop' onClick={() => { setMenu(!menu) }}>Shop</Link>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default MobileNavBar
