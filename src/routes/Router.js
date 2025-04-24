import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Kurslar from '../pages/kurslar/Kurslar'
import Contact from '../pages/contact/Contact'
import Yangiliklar from '../pages/yangiliklar/Yangiliklar'


// Resurslar bo‘limlari
import Tikuvchilik from '../pages/resurslar/bolimlar/Tikuvchilik';
import Pazandachilik from '../pages/resurslar/bolimlar/Pazandachilik';
import Hamshiralik from '../pages/resurslar/bolimlar/Hamshiralik';
import Makiyaj from '../pages/resurslar/bolimlar/Makiyaj';
import TilKurslari from '../pages/resurslar/bolimlar/TilKurslari';
import Mehnat from '../pages/resurslar/bolimlar/Mehnat'
import Kompyuter from '../pages/resurslar/bolimlar/Kompyuter'
import Kitoblar from '../pages/resurslar/bolimlar/Kitoblar'

export default function Roter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/kurslar" element={<Kurslar />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/yangiliklar" element={<Yangiliklar />} />

      {/* Resurslar bo‘limlari */}
      <Route path="/resurslar/tikuvchilik" element={<Tikuvchilik />} />
      <Route path="/resurslar/pazandachilik" element={<Pazandachilik />} />
      <Route path="/resurslar/hamshiralik" element={<Hamshiralik />} />
      <Route path="/resurslar/makiyaj-va-soch" element={<Makiyaj />} />
      <Route path="/resurslar/til-kurslari" element={<TilKurslari />} />
      <Route path="/resurslar/qo'l-mehnati" element={<Mehnat />} />
      <Route path="/resurslar/kompyuter-kurslari" element={<Kompyuter />} />
      <Route path="/resurslar/kitoblar" element={<Kitoblar />} />

      
    </Routes>


  );
}
