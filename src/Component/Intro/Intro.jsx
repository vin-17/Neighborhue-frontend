import React from 'react'
import { HashLink } from 'react-router-hash-link'
import robot from '../../Assets/nrobot.png'
import guru from '../../Assets/guru.svg'
import arrow from '../../Assets/arrow.svg'
import speakToNeo from '../../Assets/speakToNeo.svg'
import watchDemo from '../../Assets/watchDemo.svg'
import joinedPeople from '../../Assets/joinedPeopleDoodle.svg'
import twitter from '../../Assets/twitter.png'
import instagram from '../../Assets/instagram.png'
import youtube from '../../Assets/youtube.png'
import linkedIn from '../../Assets/linkedin.png'
import toyota from '../../Assets/toyotaLogo.png'
import mcD from '../../Assets/mcDLogo.png'

import './Intro.css'

const Intro = () => {
    return (
        <>
            <div className="introContainer" id='homeTop'>

                <div className="introArea">
                    <div className="introText">
                        <span className='neo'>Hue</span>
                        {/* <p>Your Advanced Health Guru <img src={guru} alt="guru" /> Ask Anything Know Everything!</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div className="introActions">
                        <img src={arrow} alt="arrow" className="arrow" />
                        <div className="introText2">
                            <p className="lightText">
                            Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita
                            </p>

                            <div className="introActionContainer">
                                <HashLink smooth to="/#chatBot" className='introActions'>
                                    <button style={{background: "linear-gradient(90deg, rgba(212,65,23,0.7988445378151261) 24%, rgba(84,24,207,0.8016456582633054) 100%)",border:"none",borderRadius:"7px",padding:"12px 18px",color:"#ffff",fontSize:"clamp(12px, 2vw, 18px)",width:"100%"}}>Speak To Hue</button>
                                </HashLink>
                                {/* <a href="" className='introActions'> */}
                                    {/* <img src={watchDemo} alt="" className='introActionImg' /> */}
                                    <button style={{background:"transparent",border:"1.5px solid black",borderRadius:"7px",padding:"12px 18px",color:"#5418CF",fontSize:"clamp(12px, 2vw, 18px)",width:"100%"}} >Watch Demo</button>
                                {/* </a> */}
                            </div>

                            <div className="socialMedia">
                                <div className="peopleContainer">
                                    <p>2000+ People Joined</p>
                                    <img src={joinedPeople} alt="" />
                                </div>
                                <div className="socialMediaContainer">
                                    <p>Our Social Media</p>
                                    <div id="socialMediaLinks">
                                        <a href="#" target='_blank'><i class="fa-brands fa-square-instagram fa-2xl" style={{color: "#DD6745"}}></i></a>
                                        <a href="#" target='_blank'><i class="fa-brands fa-tiktok fa-2xl" style={{color: "#DD6745"}}></i></a>
                                        <a href="#" target='_blank'><i class="fa-brands fa-linkedin fa-2xl" style={{color: "#DD6745"}}></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={robot} alt="" className='robot' />
            </div>
        </>
    )
}

export default Intro;