import React from 'react'
import { HashLink } from 'react-router-hash-link'
import arrow from '../../Assets/arrow-right-bk.svg'

import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footerContainer'>
                <div className="upperFooter">
                    <div className="footerItem">
                        <h3 className="footerHeading">Platform</h3>
                        <div className="footerLinkContainer">
                            <a href="/" className="footerLink">Home</a>
                            <a href="/meetneo" className="footerLink">Meet With Hue</a>
                            <a href="/pricing" className="footerLink">Pricing</a>
                            <a href="/blogs" className="footerLink">Blogs</a>
                        </div>
                    </div>

                    <div className="footerItem">
                        <h3 className="footerHeading">Company</h3>
                        <div className="footerLinkContainer">
                            <HashLink smooth to='/contact#aboutUs' className="footerLink">About Us</HashLink>
                            <a href="/contact" className="footerLink">Contact Us</a>
                        </div>

                    </div>
                    <div className="footerItem" >
                        <h3 className="footerHeading">Trust</h3>
                        <div className="footerLinkContainer">
                            <a href="#" target='_blank' className="footerLink">Terms of Use</a>
                            <a href="#" target='_blank' className="footerLink">Privacy Policy</a>
                            {/* <a href="" className="footerLink">Cookie Policy</a> */}

                        </div>
                    </div>

                    <div className="footerItem">
                        <h3 className="footerHeading">Connect</h3>
                        <div className="footerLinkContainer">
                            <a href="#" target='_blank' className="footerLink">Instagram</a>
                            <a href="#" className="footerLink">Facebook</a>
                            <a href="#" target='_blank' className="footerLink">Youtube</a>
                            <a href="#" target='_blank' className="footerLink">Linkedin</a>
                            {/* <span className="footerLink">Twitter</span> */}
                        </div>
                    </div>

                    <div className="footerItem" id='newsLetter'>
                        <h3 className="footerHeading" id='newsLetterHeading'>Stay Updated</h3>
                        <div className="newsLetter">
                            <input type="email" name="" id="" className='newsLetterEmailInput' placeholder='Email address...' />
                            <button className='newsLetterBtn'>
                                Subscribe Now
                                <img src={arrow} alt="" />
                            </button>
                        </div>
                        <p className="newsLetterText">You will receives some occasionally email from team . You will get unsubscribe option in each mail.</p>
                    </div>
                    
                </div>
                <div className="lowerFooter">© 2024 Neighborhue. All rights reserved.</div>
            </div>
        </>
    )
}

export default Footer;