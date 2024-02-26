import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import "./shareSection.css"

const ShareSection = () => {
    // insert url link here
    function copyURL() {
        navigator.clipboard.writeText("https://neighborhue.com/share");

        toast.success('Link copied in your clipboard!', {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    }

    const handleShareButtonClick = () => {
        if (navigator.share) {
            // Use navigator.share to share content
            navigator.share({
                title: 'Neighborhue',
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi",
                // url
                url: '#'
            })
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            // Handle the case where navigator.share is not available
            console.error('navigator.share is not supported in this environment');
        }
    };


    return (
        <div className="shareSectionContainer">
            <h2 className="shareHeader"> Show You <span className="deepBlue">Care </span> Share <span className="deepBlue">Neighborhue</span></h2>
            <p className="shareData">Help the neighborhue community grow by sharing the website link and showing support via our socials</p>

            <div className="shareActionContainer">
                <Link to="https://www.instagram.com/techavtar">
                    <button className="comingBtn" style={{ background: "linear-gradient(90deg, rgba(212,65,23,0.7988445378151261) 24%, rgba(84,24,207,0.8016456582633054) 100%)", border: "none", borderRadius: "7px", padding: "12px 18px", color: "#ffff", fontSize: "clamp(12px, 2vw, 18px)" }}>
                        Share Link
                        <i class="fa-solid fa-share-nodes fa-lg" style={{ color: "#ffffff" }}></i>
                    </button>
                </Link>
                <button className="comingBtn" style={{ background: "linear-gradient(90deg, rgba(212,65,23,0.7988445378151261) 24%, rgba(84,24,207,0.8016456582633054) 100%)", border: "none", borderRadius: "7px", padding: "12px 18px", color: "#ffff", fontSize: "clamp(12px, 2vw, 18px)" }}>
                    Copy Link
                    <i class="fa-solid fa-link fa-lg" style={{ color: "#ffffff" }}></i>
                </button>
            </div>
        </div>
    )
}

export default ShareSection