import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Kurslar from '../pages/kurslar/Kurslar'
import Contact from '../pages/contact/Contact'
import Yangiliklar from '../pages/yangiliklar/Yangiliklar'


// Resurslar bo‘limlari
import Tikuvchilik from '../pages/resurslar/bolimlar/tikuvchilik/Tikuvchilik';
import Pazandachilik from '../pages/resurslar/bolimlar/Pazandachilik';
import Hamshiralik from '../pages/resurslar/bolimlar/Hamshiralik';
import Makiyaj from '../pages/resurslar/bolimlar/Makiyaj';
import OilaPsixologiyasi from '../pages/resurslar/bolimlar/OilaPsixologiyasi';

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
      <Route path="/resurslar/oila-psixologiyasi" element={<OilaPsixologiyasi />} />
    </Routes>


  );
}
