import React from 'react'
import "./terms.css"
import { Link } from 'react-router-dom'

const Terms = () => {
    return (
        <div className='terms_main'>
            <h1>TERMS OF USE </h1>
            <span>Last updated February 24, 2024 </span>
            <div className='agreement'>
                <h1>AGREEMENT TO OUR LEGAL TERMS </h1>
                <p>We are Neighborhue (<b>"Company," "we," "us," "our"</b>).<br />
                    We operate the website <Link to="http://neighborhue.com">http://neighborhue.com</Link>  (the "Site"), as well as any other related products and services
                </p>
                <p>that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").<br />You can contact us by email at support@neighborhue.com</p>
                <p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of </p>
                <p>an entity (<b>"you"</b>), and Neighborhue, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms.<span style={{ textTransform: "uppercase" }}>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</span></p>
                <p>Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted. </p>
                <p>The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.We recommend that you print a copy of these Legal Terms for your records.
                </p>
            </div>
            <div className='table_of_contents'>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Terms