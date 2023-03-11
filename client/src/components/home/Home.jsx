import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
import medical from "./medical-5459631.svg"
import Appointment from "./Appointment.svg"
import blog from "./blog.svg"
import emergency from './emergency.svg'

const Home = () => {
  return (
    <div className='homePanel'>
    <section className="home">
        <div className="home_content">
            <h1>
                <strong>Mental illness is not a personal failure</strong>
            </h1>
        </div>
        <div className="home_image">
            <img src={medical} alt="" width="100%" height="100%"/>
        </div>
    </section>
    <section className="buttons">
        <Link to='/chat' className="container1">
            <div className="container">
                <div className="content_top"><h4>Take Appointment</h4></div>
                <div className="content_head"><img src={Appointment} alt=""/></div>
                <div className="content_about"><span>Fix your appointment now</span> </div>
            </div>
        </Link>
        <a href="blog.html" className="container2">
            <div className="container">
                <div className="content_top"><h4>Blog</h4></div>
                <div className="content_head"><img src={blog} alt=""/></div>
                <div className="content_about"><span>Read our blog</span> </div>
            </div>
        </a>
        <a href="video.html" className="container3">
            <div className="container">
                <div className="content_top"><h4>Emergency</h4></div>
                <div className="content_head"><img src={emergency} alt=""/></div>
                <div className="content_about"><span>Emergency Action</span> </div>
            </div>
        </a>
    </section>
    <div className="background"></div>
    </div>
  )
}

export default Home