import React from 'react'
import neighbour from '../../Assets/neighbour.png'
import './Upcoming.css'
import iic from '../../Assets/IIC.jpg'
import bit from '../../Assets/bit logo.png'
import techavatar from '../../Assets/techavatar.png'
import leo from '../../Assets/leo.webp'
import degree from '../../Assets/180deg.webp'
import unesquo from '../../Assets/unesquo.webp'
import dristi from '../../Assets/dristi.jpg'
import { Link } from 'react-router-dom'



const OldCustomers = () => {

    // yahan pr motion lgana h aur ek naya component bna k us m sare customers k data/logo ko bhejna h aur wahan pr hi render krna h
    return (

        <div className='oldCustomersContainer'>
            <h5>Trusted by 15+ companies</h5>
            <div className="customersLogo">
                <img src={bit} alt="" loading='lazy' />
                <img src={iic} alt="" loading='lazy' />
                <img src={techavatar} alt="" loading='lazy' />
                <img src={dristi} alt="" loading='lazy' />
                <img src={degree} alt="" loading='lazy' />
                <img src={leo} alt="" loading='lazy' />
                <img src={unesquo} alt="" loading='lazy' />
            </div>
        </div>
    )
}

const Upcoming = () => {
    return (
        <>
        <div className='upcomingContainer'>
            <img src={neighbour} alt="" loading='lazy' />
            <div className="upcomingText">
                <p id='upcomingHeading'>Learn more about the city, read our blogs</p>
                <p id='upcomingMain'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!</p>
                <Link to={"/blogs"} id='comingSoon'>
                    <button className="comingBtn">
                        Coming Soon
                        <i class="fa-solid fa-arrow-right fa-rotate-by fa-lg" style={{rotate:"-45deg"}}></i>
                    </button>
                </Link>
            </div>
        </div>
        <OldCustomers/>
        </>
    )
}

export default Upcoming;