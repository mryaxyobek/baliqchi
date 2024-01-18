import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';

// layouts 
import MainRoot from './layouts/MainRoot';
import About from './layouts/About';
import Static from './layouts/Static';
import Service from './layouts/Service';

// pages 
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutPage from './pages/About';
import TashkiliyTuzilma from './pages/TashkiliyTuzilma';
import Orinbosarlar from './pages/Orinbosarlar';
import IqtisodiyKorsatmalar from './pages/IqtisodiyKorsatmalar';
import JamoatchilikKengashi from './pages/JamoatchilikKengashi';
import XalqaroMunosabat from './pages/XalqaroMunosabat';
import HarakatlarStrategiyasi from './pages/HarakatlarStrategiyasi';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />}>

        <Route index element={<Home />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/about' element={<About />} >
          <Route index element={<AboutPage />} />
          <Route path='structure' element={<TashkiliyTuzilma />} />
          <Route path='managers' element={<Orinbosarlar />} />
        </Route>

        <Route path='/static' element={<Static />} >
          <Route path='iqtisodiy-korsatkichlar' element={<IqtisodiyKorsatmalar />} />
          <Route path='jamoatchilik-kengashi' element={<JamoatchilikKengashi />} />
          <Route path='xalqaro-munosabat' element={<XalqaroMunosabat />} />
          <Route path='harakatlar-strategiyasi' element={<HarakatlarStrategiyasi />} />
        </Route>

        <Route path='/service' element={<Service />} >
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App;