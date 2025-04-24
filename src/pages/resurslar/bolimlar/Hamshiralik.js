


import React from "react";
import { motion } from "framer-motion";
import Background from "../../../components/Background";
import Videos from "../../../components/Videos";
import ImagesGallery from "../../../components/ImagesGallery";
import Lists from "../../../components/Lists";

// Image imports
import NurseBG from "../../../assets/images/nurseBg.jpg";
import Image1 from "../../../assets/images/hamshira1.jpg";
import Image2 from "../../../assets/images/hamshira2.jpg";
import Image3 from "../../../assets/images/hamshira3.jpg";


// Video imports

import video1 from "../../../assets/videos/hamshira-1.MP4";
import video2 from "../../../assets/videos/hamshira-2.MOV";
import video3 from "../../../assets/videos/hamshira-3.MP4";
import video4 from "../../../assets/videos/hamshira-4.MP4";
import video5 from "../../../assets/videos/hamshira-5.MP4";
import video6 from "../../../assets/videos/hamshira-6.MP4";
import video7 from "../../../assets/videos/hamshira-7.MP4";
import video8 from "../../../assets/videos/massaj-1.MP4";
import video9 from "../../../assets/videos/massaj-2.MP4";
import video10 from "../../../assets/videos/massaj-3.MP4";
import video11 from "../../../assets/videos/massaj-4.MOV";
import video12 from "../../../assets/videos/massaj-5.MP4";
import video13 from "../../../assets/videos/massaj-6.MP4";
import video14 from "../../../assets/videos/massaj-7.MP4";
import video15 from "../../../assets/videos/massaj-8.MP4";

const Hamshiralik = () => {

  const title = "Hamshiralik kurslari";
  const text = "Amaliyotga asoslangan o‘quv dasturi bilan professionallikka erishing."
  const videos = [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10, video11, video12, video13, video14, video15];
  const images = [Image1, Image2, Image3];
  const list = [
    "Tibbiy yordam bilim asoslari kursi",
    "Yosh onalar maktabi",
    "Massaj kursi",
    "Bolalar massaji kursi",
    "Hamshiralik kursilari"
  ]

  return (

    <>
      {/*  */}
      <Background backgroundImg={NurseBG} title={title} text={text} />
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-2xl md:text-xl font-semibold text-center text-[#911a1b] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            O‘quv markazimizda “ hamshiralik va uqalash (massaj) kurslari” bo‘yicha kurslar tashkil etilgan.
            Barcha opa-singillarimizni ushbu o‘quv kursiga taklif etamiz.
            Har bir dars amaliyot bilan uyg‘unlikda olib boriladi.
          </motion.h2>

          <motion.div
            className="my-10 text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-medium">Hamshiralik va Massaj bo'limi quyidagi kurslarga bo'linadi:</p>
            <Lists list={list} />
          </motion.div>
          <ImagesGallery Images={images} />

          <Videos videos={videos} />

        </div>
      </section>

    </>

  );
};

export default Hamshiralik;

