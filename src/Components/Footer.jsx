import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
        <footer>
            <div className="FooterContainer">
                <div className="FooterBox">
                    <div className="FooterBoxLeft">
                        <img src="/FooterLogo.png" alt="" />
                        <p>We Believe that burgers should be an experience that tantalizes all your senses. Our premium burgers are crafted with the finest ingredients, including our custom blend of Angus beef, to create a burgerthat is unmatched in taste and quality.</p>
                    </div>
                    <div className="FooterBoxRight">
                        <div className="FooterBoxContent">
                            <h4>Company</h4>
                            <p>Contact Us</p>
                            <p>Menu</p>
                            <p>Blog</p> 
                        </div>
                        <div className="FooterBoxContent">
                            <h4>Quick Menu</h4>
                            <p>Beef Burgers</p>
                            <p>Chicken Burgers</p>
                            <p>Plant-Based Burgers</p>
                            <p>Sides</p>
                        </div>
                        <div className="FooterBoxContent">
                            <h4>Quick Menu</h4>
                            <p>Beef Burgers</p>
                            <p>Chicken Burgers</p>
                            <p>Plant-Based Burgers</p>
                            <p>Sides</p>
                        </div>
                    </div>
                </div>
                <div className="FooterLinks">
                    <div className="FooterLinksContent">
                        <div className="FooterCopyright">
                            <p>@2024 Recreated by Mali and original BoldThems</p>
                        </div>
                        <div className="FooterIcons">
                            <i><FaFacebookF /></i>
                            <i><FaLinkedinIn /></i>
                            <i><FaXTwitter /></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
