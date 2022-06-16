import React from 'react'
import { Link } from 'react-router-dom'
import avatar from "../../assets/img/avatar.jpg"
import {AiOutlineArrowRight} from 'react-icons/ai'
import Button from '../../components/button/Button'
import "./home.scss"

const Home = () => {
  return (
    <div className="home" data-aos="fade-up" data-aos-duration="1000">
      <div className="home__a "></div>

      <div className="home__avatar">
        <img src={avatar} alt="" />
      </div>

      <div className="home__content">
        <h1>- I'm Dinh Cong Thanh</h1>
        <h1>Web Developer !</h1>
        
        <span>
          Hello mọi người! Mình là Thành, đang là sinh viên vừa tốt nghiệp
          tại trường Kiến Trúc Đà Nẵng ngành công nghệ thông tin, nhưng  
          4.5 năm mình không chú tâm vào chuyện học tâm nên khi ra trường
          mình còn lơ mơ không biết khi nào mới xin được việc, nhưng tình 
          cờ biết đến cộng đồng F8 Fullstack của anh Sơn, mình đã hoàn thành
          các khóa học HTML, CSS, ReactJS và có được một số dự án cá nhân.
          Trải qua nhiều cay đắng, thật sự cảm ơn anh Sơn cũng như cộng đồng
          anh em đóng góp đã truyền động lực cho mình suốt thời gian qua 
          giúp mình không bỏ cuộc.
        </span>

        <div className="home__content-btn">

          <Button>
            <Link to={"/portflolio"}>
                <span> portfolio</span>
                <div className="btn-icon"> <AiOutlineArrowRight /></div>
              </Link>
          </Button>          
          <Button>
            <Link to={"/about"}>
                <span> about</span>
                <div className="btn-icon"> <AiOutlineArrowRight /></div>
              </Link>
          </Button>
        </div>
      </div>


    </div>
  )
}

export default Home