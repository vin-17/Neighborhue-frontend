import React from 'react'
import neighbour from '../../Assets/neighbour.png'
import './Upcoming.css'

const Upcoming = () => {
    return (
        <div className='upcomingContainer'>
            <img src={neighbour} alt="" loading='lazy' />
            <div className="upcomingText">
                <p id='upcomingHeading'>Lorem ipsum , dolor sit amet</p>
                <p id='upcomingMain'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!</p>
                <a href="#" id='comingSoon'>
                    <button className="comingBtn">
                        Coming Soon
                        <i class="fa-solid fa-arrow-right fa-rotate-by fa-lg" style={{rotate:"-45deg"}}></i>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Upcoming;