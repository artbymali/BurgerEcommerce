import React from 'react'
import './Blog.css'
import Navigation from '../../Components/Navigation'
import { FaFacebookF } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

function Blog(props) {

  const {blog, id} = props

  return (
    <>
      <div className="BlogBox">
        <div className="BlogBoxImg">
          <img src={blog.blogImg} alt="" />
        </div>
        <div className="BlogBoxContent">
          <h5><span>Burgers</span> <span>FastFood</span></h5>
          <h1>{blog.heading}</h1>
          <p>{blog.outerdiscruption}</p>
          <div className="BlogBoxBottom">
            <div className="BlogBoxIcons">
              <i><FaFacebookF /></i>
              <i><FaXTwitter /></i>
              <i><FaLinkedinIn /></i>
              <i><BsInstagram /></i>
            </div>
            <div className="BlogBoxButton">
              <button>READ MORE</button>
              <i><FaChevronRight /></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
