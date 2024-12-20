import React from 'react'
import Navigation from '../../Components/Navigation'
import Blog from './Blog'
import Blogs from './Blog.json'
import { FaSearch } from "react-icons/fa";

function BlogRecever() {
  return (
    <>
        <Navigation/>
        <section className='Blog'>
            <div className="BlogContainer">
                <div className="BlogUpeer">
                    <div className="BlogOverlay"></div>
                    <div className="BlogUpeerContent">
                        <h4>HOME</h4>
                        <h1>BLOG</h1>
                        <p>Capitalise on low hanging fruit to identify a ballpark value added activity to beta performance test. Override the digital divide.</p>
                    </div>
                    <div className="BlogUpeerCutter">
                        <img src="/asset 15.png" alt="" />
                    </div>
                </div>
                <div className="BlogContent">
                    <div className="BlogContentLeft">
                        {
                            Blogs.map((blog) => <Blog key={blog.id} blog={blog} id={blog.id}/>)
                        }
                    </div>
                    <div className="BlogContentRight">
                        <div className="BlogContentSearch">
                            <input type="text" placeholder='Looking for...'/>
                            <i><FaSearch /></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BlogRecever
