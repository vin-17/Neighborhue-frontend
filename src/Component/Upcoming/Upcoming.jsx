import React from 'react'
import neighbour from '../../Assets/neighbour.png'
import arrow from '../../Assets/arrow-up-right.svg'

import './Upcoming.css'

const Upcoming = () => {
    return (
        <div className='upcomingContainer'>
            <img src={neighbour} alt="" />
            <div className="upcomingText">
                <p id='upcomingHeading'>Lorem ipsum , dolor sit amet</p>
                <p id='upcomingMain'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!</p>
                <a href="#" id='comingSoon'>
                    <button className="comingBtn" style={{background: "linear-gradient(90deg, rgba(212,65,23,0.7988445378151261) 24%, rgba(84,24,207,0.8016456582633054) 100%)",border:"none",borderRadius:"7px",padding:"12px 18px",color:"#ffff",fontSize:"clamp(12px, 2vw, 18px)"}}>
                        Coming Soon
                        <i class="fa-solid fa-arrow-right fa-rotate-by fa-lg" style={{rotate:"-45deg"}}></i>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Upcoming;