import React from 'react'
import {Routes , Route} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Portflolio from './portflolio/Portflolio';
import Contacts from './contacts/Contacts';

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portflolio' element={<Portflolio />} />
        <Route path='/contacts' element={<Contacts />} />
    </Routes>
  )
}

export default Pages