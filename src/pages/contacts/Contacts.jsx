import React from 'react'
import PageHeading from '../../components/page-heading/PageHeading'
import Button from '../../components/button/Button'
import { Link } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AiFillPhone } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"
import { MdOutlineMarkEmailRead } from "react-icons/md"


import './contacts.scss'


const Contacts = () => {
  return (
    <div className='contact' data-aos="fade-up" data-aos-duration="1000">
      <PageHeading 
        title = "contact"
        page_txt1 = "get in"
        page_txt2 = "touch"
      />

    <div className="contact-content" >
      <div className="infor">
          <h2>DON'T BE SHY !</h2>
          <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

          <ul>
            <li> 
              <div className="infor-icon"><FaMapMarkerAlt /></div>
              <div className="infor-list">
                <p>ADDRESS</p>
                Vietnam
              </div>
            </li>
            <li> 
              <div className="infor-icon"><MdEmail /></div>
              <div className="infor-list">
                <p>EMAIL</p>
                congthanh291199@gmail.com
              </div>
            </li>
            <li> 
              <div className="infor-icon"><AiFillPhone /></div>
              <div className="infor-list">
                <p>PHONE</p>
                0912880xxx
              </div>
            </li>
          </ul>

          <div className="social">
            <div className="social-item"><FaFacebookF /></div>
            <div className="social-item"><AiFillGithub /></div>
          </div>
      </div>

      <div className="form">
          <div className="form__infor">
              <input 
                className="form__infor-name"
                type="text"
                placeholder='YOUR NAME' 
              />
              <input 
                className="form__infor-email"
                type="text"
                placeholder='YOUR EMAIL' 
              />
          </div>

          <input
             className="form__subject" 
             type="text"
             placeholder='YOUR SUBJECT'
          />

          <textarea placeholder='YOUR MESSAGE'></textarea>

          <Button>
            <Link to={"/"}>
              <span> SEND MESSAGE</span>
              <div className="btn-icon"> <MdOutlineMarkEmailRead /></div>
            </Link>
          </Button>
             
      </div>
    </div>
      
  </div>
  )
}

export default Contacts