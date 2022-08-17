import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import PageHeading from '../../components/page-heading/PageHeading'
import Movie1 from '../../assets/img/web/movie/m2.jpg'
import Movie2 from '../../assets/img/web/movie/m1.jpg'
import Movie3 from '../../assets/img/web/movie/m3.jpg'

import Shop1 from '../../assets/img/web/shop/shop1.jpg'
import Shop2 from '../../assets/img/web/shop/shop2.jpg'
import Shop3 from '../../assets/img/web/shop/shop3.jpg'
import Shop4 from '../../assets/img/web/shop/shop4.jpg'


import Mern1 from '../../assets/img/web/mern/mern-shop-1.PNG'
import Mern2 from '../../assets/img/web/mern/mern-shop-2.PNG'
import Mern3 from '../../assets/img/web/mern/mern-shop-3.PNG'
import Mern4 from '../../assets/img/web/mern/mern-shop-4.PNG'
import Mern5 from '../../assets/img/web/mern/mern-shop-5.PNG'

import Modal, {ModalContent} from '../../components/modal/Modal'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/css';
import './portflolio.scss'


const ProjectData = [
  {
    id: 1,
    display_name: "web shop" ,
    tags : ['html','css','react','api','firebase'],
    category : "web api",
    frontend : ["js",'css','html' ] ,
    backend : 'firebase',
    des : "Runs the app in the development mode.",
    creacte : '23-6-2022',
    path_demo : "https://shop-web-api.netlify.app",
    path_git: "https://github.com/thanh2911/shop-web-api" ,
    img: [
      Shop1,
      Shop2,
      Shop3,
      Shop4,
    ]
  },
  {
    id:2,
    display_name: "web movies " ,
    category : "web api",
    tags : ['html','css','react','api'],
    frontend : ["js",'css','html' ] ,
    backend : '',
    des : "Runs the app in the development mode.",
    creacte : '23-1-2022',
    path_demo : "https://movies-react-999.netlify.app/",
    path_git: "https://github.com/thanh2911/react_movie" ,
    img : [
      Movie1,
      Movie2,
      Movie3
    ]
  },
  {
    id: 3,
    display_name: "Mern Shop" ,
    category : "react/nodejs",
    tags : ['html','scss','react','node js','express','mongoose'],
    frontend : ["js",'scss','html' ] ,
    backend : ['node js','express','mongoose'],
    des : "Runs the app in the development mode.",
    creacte : '5-8-2022',
    path_demo : "https://thanhfs-mern.herokuapp.com/",
    path_git: "https://github.com/thanh2911/shop-mern" ,
    img: [
      Mern1,
      Mern2,
      Mern3,
      Mern4,
      Mern5,
      
    ]
  },

]

const Category = [
  {
    type: "web api"
  },
  {
    type: "react/nodejs"
  }

]

const BoxProject = props => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="box-project">
    <div className="box-project__web">
      <h1>{props.display_name}</h1>
      <div className="box-project__line"></div>
      <div className="box-project__web-list">
      <Swiper
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
          >
            {props.img.map((i) => (
              <SwiperSlide>
                <a href={`${props.path_demo}`}
                 className="box-project__web-item" > 
                      <img src={i} alt="" />
                </a>
              </SwiperSlide>           
            ))}
        </Swiper>
       
      </div>
    </div>
    
    <div className="box-project__details">
        <h1>Details</h1>
        <div className="box-project__line"></div>
        <div className="box-project__details-content">
          <div className="box-project__details-des">{props.des}</div>
          <div className="box-project__details-created">Created - {props.creacte}</div>
          <div className="box-project__details-frontend">Frontend - {props.frontend.join(', ')}</div>
          <div className="box-project__details-backend">Backend -{props.backend.join(', ')}</div>
          <div className="box-project__details-tags">Tags -{props.tags}</div>
          <div className="box-project__details-demo">Demo -
             <a href={`${props.path_demo}`}>
               {props.path_demo}
             </a>
          </div>
          <div className="box-project__details-git">Git - 
          <a   href={`${props.path_git}`}> 
            {props.path_git}
          </a>
          
          </div>
        </div>
  

    </div>
</div>
  )
}

const Portflolio = () => {

  const [project ,setProject] = useState(ProjectData);
  const [id,setId] = useState(null)
  
  const handlecategary = (type) => {
    const result = ProjectData.filter((proData) => {
      return proData.category === type
    })
    setProject(result)
  }

  console.log(project);

  const openModal = (id) => {
    setId(id)
    const modal = document.querySelector('#modal-project');
    modal.classList.toggle('active')
  }

  return (
      <div className='portflolio' data-aos="fade-up">
        <PageHeading 
          title = "works"
          page_txt1 = "my"
          page_txt2 = "portfolio"
        />

        <div className="portflolio-category">
            {
              Category.map((item ,index) => (
                <div className="portflolio-category__item"
                 key={item.index} onClick={() =>handlecategary(item.type)} 
                 >
                {item.type}
                </div>
              ))
            }
            <div className="portflolio-category__item" onClick={() =>  setProject(ProjectData) }>all</div>
        </div>

        <div className="portflolio-project">
          {
            project.map((item,index) => (
              <>
               <div className="portflolio-project__item" 
                key={index}
                 data-aos="fade-right"
                 data-aos-anchor="#example-anchor"
                 data-aos-offset="500"
                 data-aos-duration={`${500 + (index*100)}`}
                onClick={() => openModal(item.id)}
                style={{backgroundImage: `url(${item.img[0]})`}}
              >
                <span>{item.display_name}</span>
              </div>
              </>
            ))
          }

          {
            project.map(item =>(
              <>
                {item.id ===id ?         
                <Modal id='modal-project'>
                  <ModalContent>
                    <BoxProject 
                      display_name = {item.display_name}
                      img = {item.img}
                      des = {item.des}
                      creacte = {item.creacte}
                      frontend = {item.frontend}
                      backend = {item.backend}
                      tags = {item.tags}
                      path_demo = {item.path_demo}
                      path_git = {item.path_git}
                    />
                  </ModalContent>
                </Modal> : ''}
              </>
              
            ))
          }
        </div>


      </div>

    
  )
}

export default Portflolio