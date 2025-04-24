import React from "react";
import { motion } from "framer-motion";
import Background from "../../../components/Background";
import Videos from "../../../components/Videos";
import Lists from "../../../components/Lists";

// Image imports
import HandMadeBg from "../../../assets/images/HandMadeBg.jpg";

// Video imports

import video1 from "../../../assets/videos/biser-1.MP4";
import video2 from "../../../assets/videos/biser-2.MP4";
import video3 from "../../../assets/videos/biser-3.MP4";
import video4 from "../../../assets/videos/biser-4.MOV";
import video5 from "../../../assets/videos/biser-5.MOV";
import video6 from "../../../assets/videos/biser-6.MOV";
import video7 from "../../../assets/videos/biser-7.MP4";
import video8 from "../../../assets/videos/biser-8.MOV";
import video9 from "../../../assets/videos/biser-9.MP4";
import video10 from "../../../assets/videos/biser-10.MP4";
import ImagesGallery from "../../../components/ImagesGallery";

// Image imports
import Image1 from "../../../assets/images/handmade1.jpg";
import Image2 from "../../../assets/images/handmade2.jpg";
import Image3 from "../../../assets/images/handmade3.jpg";
import Image4 from "../../../assets/images/handmade4.jpg";
import Image5 from "../../../assets/images/handmade5.jpg";
import Image6 from "../../../assets/images/handmade6.jpg";


const Mehnat = () => {

  const title = "Qo'l mehnati kurslari";
  const text = "Tikuvchilik, kashtachilik, dekorativ ishlar va boshqalar – barchasi bir kursda!"
  const videos = [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10];
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const list = [
    "Biser tikish kursi",
    "Bujiteriya kursi",
    "Kashtachilik kursi",
    "Qo'lda tikish kursi",
    "Sun'iy gul yasash kursi",
    "Sarpo quti kursiga bo'linadi",
    "Sumka kursi",
   " To'quvchilik kursi",
    "Ayrodizayn kursi"
  ]

  return (

    <>
      {/*  */}
      <Background backgroundImg={HandMadeBg} title={title} text={text} />
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-2xl md:text-xl text-center font-semibold text-center text-[#911a1b] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Qo'l mehnati bo'limlari
          </motion.h2>

          <motion.div
            className="my-10 text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <Lists list={list} />
          </motion.div>
          <ImagesGallery Images={images}/>
          <Videos videos={videos} />

        </div>
      </section>

    </>

  );
};

export default Mehnat;

