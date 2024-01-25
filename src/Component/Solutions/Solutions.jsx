import React from 'react'
import solution1 from '../../Assets/solutions1.svg'
import solution2 from '../../Assets/solutions2.svg'
import solution3 from '../../Assets/solutions3.svg'
import './Solutions.css'

import iic from '../../Assets/IIC.jpg'
import bit from '../../Assets/bit logo.png'
import techavatar from '../../Assets/techavatar.png'
import leo from '../../Assets/leo.webp'
import degree from '../../Assets/180deg.webp'
import unesquo from '../../Assets/unesquo.webp'
import dristi from '../../Assets/dristi.jpg'

const OldCustomers = () => {

    // yahan pr motion lgana h aur ek naya component bna k us m sare customers k data/logo ko bhejna h aur wahan pr hi render krna h
    return (

        <div className='oldCustomersContainer'>
            <h5>Trusted by 15+ companies</h5>

            <div className="customersLogo">
                <img src={bit} alt="" />
                <img src={iic} alt="" />
                <img src={techavatar} alt="" />
                <img src={dristi} alt="" />
                <img src={degree} alt="" />
                <img src={leo} alt="" />
                <img src={unesquo} alt="" />
            </div>
        </div>
    )
}

const Solutions = () => {
    return (
        <>
        <div className='solutionsContainer'>
            
            <div className="solutionIntro">
                <p className='boldSolutionIntro'>Lorem ipsum dolor <br /> <span className='boldSolutionIntro boldSolutionIntroBg'>Sit amet consectetur</span></p>
                <p className='lightSolutionIntro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</p>
                <p id="lightSolutionMobile">Experience our AI chatbot's instant, personalized excellence, loved by 86% of users</p>
            </div>

            <div className="solutionItems">
                <div className="solution">
                    <img src={solution1} alt="" className='solutionImage'/>
                    <p className='alignCenter'>Advertisement 1<br />Lorem ipsum</p>
                </div>
                <div className="solution">
                    <img src={solution2} alt="" className='solutionImage'/>
                    <p className='alignCenter'>Advertisement 1<br />Lorem ipsum</p>
                </div>
                <div className="solution">
                    <img src={solution3} alt="" className='solutionImage'/>
                    <p className='alignCenter'>Advertisement 1<br />Lorem ipsum</p>
                </div>
            </div>

        </div>
        <OldCustomers />
        </>
    )
}

export default Solutions;