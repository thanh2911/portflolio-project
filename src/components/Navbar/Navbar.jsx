import React , {useRef , useEffect} from 'react'
import { Link , useLocation } from 'react-router-dom'
import { FaUserAlt} from 'react-icons/fa';
import { AiFillHome} from 'react-icons/ai'; 
import { FaBriefcase} from 'react-icons/fa';
import { BiEnvelopeOpen} from 'react-icons/bi';
import { FaLightbulb} from 'react-icons/fa';
import { MdNightlight} from 'react-icons/md';


import './navbar.scss'

const NavData = [
  {
    display: "home",
    path: "/",
    icon : <AiFillHome/>
  },
  {
    display: "portfolio",
    path: "/portflolio",
    icon : <FaBriefcase/>
  },
  {
    display: "about",
    path: "/about",
    icon : <FaUserAlt/>
  },
  {
    display: "contacts",
    path: "/contacts",
    icon : <BiEnvelopeOpen/>
  }
] 

const Navbar = () => {

  const toggleRef = useRef(null)

  // useEffect(() => {

  // },[])

  const ToggleTheme = () => {
    toggleRef.current.parentNode.classList.toggle("active")
  }

  const {pathname} = useLocation();
  const active = NavData.findIndex(item => item.path === pathname);

  return (

    <>

      <div ref={toggleRef} className="toggle-theme" onClick={ToggleTheme} >
        <div className="toggle-theme__icon1">
          <FaLightbulb />
        </div>

        <div className="toggle-theme__icon2">
          <MdNightlight />
        </div>
      </div>

      <div className="nav">
        {
          NavData.map((item , index) => (
            <div className={`nav-item ${active === index ? "active" : ""}`}
             key={index}>
                <Link to={item.path}>
                <span className="nav-display">{item.display}</span>
                <span className="nav-icon">{item.icon} </span>

                </Link>
            </div>
          ))
        }
    </div>
    </>


  )
}

export default Navbar