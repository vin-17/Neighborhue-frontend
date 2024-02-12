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

const Solutions = () => {
    return (
        <>
            <div className='solutionsContainer'>

                <div className="solutionIntro">
                    <p className='boldSolutionIntro'>How to use the <br /> <span className='boldSolutionIntro boldSolutionIntroBg'>Hue AI model</span></p>
                    <p className='lightSolutionIntro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</p>
                    <p id="lightSolutionMobile">Experience our AI chatbot's instant, personalized excellence, loved by 86% of users</p>
                </div>

                <div className="solutionItems">
                    <div className="solution">
                        <img src={solution1} alt="" className='solutionImage' loading='lazy' />
                        <p className='alignCenter'>Ask hue for the best<br />areas in the city</p>
                    </div>
                    <div className="solution">
                        <img src={solution3} alt="" className='solutionImage' loading='lazy' />
                        <p className='alignCenter'>Receive recommendation and<br />read our blogs</p>
                    </div>
                    <div className="solution">
                        <img src={solution2} alt="" className='solutionImage' loading='lazy' />
                        <p className='alignCenter'>Your data & preferences<br />are always secured</p>
                    </div>
                </div>

            </div>
            <OldCustomers />
        </>
    )
}

export default Solutions;