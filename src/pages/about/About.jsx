import React from 'react'
import PageHeading from '../../components/page-heading/PageHeading';
import "./about.scss"
import Html from '../../assets/img/skills/html.png' ;
import Css from '../../assets/img/skills/css.png' ;
import Js from '../../assets/img/skills/js.png' ;
import Responsive from '../../assets/img/skills/responsive.png';
import ReactJs from '../../assets/img/skills/react.png' ;
import Sass from '../../assets/img/skills/sass.png' ;
import Git from '../../assets/img/skills/git.png' ;

const Myskills = [
  {
    display : "html",
    icon : Html ,
  },
  {
    display : "css",
    icon : Css ,
  },
  {
    display : "js",
    icon : Js ,
  },
  {
    display : "responsive",
    icon : Responsive ,
  },
  {
    display : "react",
    icon : ReactJs ,
  },
  {
    display : "sass",
    icon : Sass ,
  },
  {
    display : "git",
    icon : Git ,
  },
]

const About = () => {

  return (
    <div className="about" data-aos="fade-up" data-aos-duration="1000">

        <PageHeading 
            title = "RESUME"
            page_txt1 = "about"
            page_txt2 = "me"
        />

        <div className="content">
            <div className="content-info" data-aos="fade-right">
                <p>Thong tin ca nhan</p>

                <ul className="infos">
                    <li className="infos__item">
                      <span>First Name: </span> Dinh
                    </li>
                    <li className="infos__item">
                      <span>Last Name: </span>Cong Thanh
                    </li>
                    <li className="infos__item">
                      <span>Birthday: </span>22 Years
                    </li>
                    <li className="infos__item">
                      <span>Sex: </span> Male
                    </li>
                    <li className="infos__item">
                      <span>National: </span> Vietnam
                    </li>
                    <li className="infos__item">
                      <span>Address: </span> Vietnam
                    </li>
                    <li className="infos__item">
                      <span>Phone: </span> 0912880xxx
                    </li>
                    <li className="infos__item">
                      <span>Facebook: </span> facebook.com/ThanhDinh
                    </li>
                    <li className="infos__item">
                      <span>Email: </span> congthanh291199@gmail.com
                    </li>

                </ul>
            </div>

            <ul className="content-more" data-aos="fade-left" >
              <li className="content-more__item">
                  <h1>1 +</h1>
                  
                  <span> 
                    <p>YEARS OF </p>
                    <p>EXPERIENCE</p>
                  </span>
              </li>
              <li className="content-more__item">
                  <h1>1 +</h1>
                  
                  <span> 
                    <p>YEARS OF </p>
                    <p>EXPERIENCE</p>
                  </span>
              </li>
              <li className="content-more__item">
                  <h1>1 +</h1>
                  
                  <span> 
                    <p>YEARS OF </p>
                    <p>EXPERIENCE</p>
                  </span>
              </li>
              <li className="content-more__item">
                  <h1>1 +</h1>
                  
                  <span> 
                    <p>YEARS OF </p>
                    <p>EXPERIENCE</p>
                  </span>
              </li>
            </ul>
        </div>

        <div className="about-skills">
            <h2>MY SKILLS</h2>

            <div className="about-skills__icons">

              {
                Myskills.map((item , index) => (
                  <div className="about-skills__icons-wrapper" data-aos="fade-up">
                    <div className="about-skills__icons-item" key={index} >
                      <img src={item.icon} alt="" />
                     
                    </div>

                    <p>{item.display}</p>
                  </div>

                ))
              }

            </div>
        </div>
    </div>
  )
}

export default About