import React from 'react'
import { HashLink } from 'react-router-hash-link'
import robot from '../../Assets/nrobot.png'
import arrow from '../../Assets/arrow.svg'
import joinedPeople from '../../Assets/joinedPeopleDoodle.svg'
import './Intro.css'

const Intro = () => {
    return (
        <>
            <div className="introContainer" id='homeTop'>

                <div className="introArea">
                    <div className="introText">
                        <span className='neo'>Hue</span>
                        <p>Geo-data AI model Neighborhood recommendations</p>
                    </div>
                    <div className="introActions">
                        <img src={arrow} alt="arrow" className="arrow" loading='lazy' />
                        <div className="introText2">
                            <p className="lightText">
                                Ask Hue to help find the perfect neighborhood based on what you find most important
                            </p>

                            <div className="introActionContainer">
                                <HashLink smooth to="/#chatBot" className='introActions'>
                                    <button>Speak To Hue</button>
                                </HashLink>
                                <button >Watch Demo</button>
                            </div>

                            <div className="socialMedia">
                                <div className="peopleContainer">
                                    <p>2000+ People Joined</p>
                                    <img src={joinedPeople} alt="people" loading='lazy' />
                                </div>
                                <div className="socialMediaContainer">
                                    <p>Our Social Media</p>
                                    <div id="socialMediaLinks">
                                        <a href="#" target='_blank'><i class="fa-brands fa-square-instagram fa-2xl" style={{ color: "#DD6745" }}></i></a>
                                        <a href="#" target='_blank'><i class="fa-brands fa-tiktok fa-2xl" style={{ color: "#DD6745" }}></i></a>
                                        <a href="#" target='_blank'><i class="fa-brands fa-linkedin fa-2xl" style={{ color: "#DD6745" }}></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={robot} alt="" className='robot' loading='lazy' />
            </div>
        </>
    )
}

export default Intro;