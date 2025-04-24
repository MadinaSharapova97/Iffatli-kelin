


import React from "react";
import { motion } from "framer-motion";
import Background from "../../../components/Background";
import Videos from "../../../components/Videos";
import ImagesGallery from "../../../components/ImagesGallery";
import Lists from "../../../components/Lists";

// Image imports
import Cake from "../../../assets/images/Cake.jpg";
import Image1 from "../../../assets/images/cake1.jpg";
import Image2 from "../../../assets/images/cake2.jpg";
import Image3 from "../../../assets/images/cake3.jpg";
import Image4 from "../../../assets/images/cake4.jpg";
import Image5 from "../../../assets/images/cake5.jpg";
import Image6 from "../../../assets/images/cake6.jpg";

 // Video imports

import video1 from "../../../assets/videos/cake1.mp4";
import video2 from "../../../assets/videos/cake2.mp4";
import video3 from "../../../assets/videos/cake3.mp4";

const Pazandachilik = () => {

  const title = "Pazandachilik kurslari";
  const text = "O‘z taomingizni o‘zingiz pishirishni xohlaysizmi? Unda 'Iffatli kelin' o‘quv markazi siz uchun eng to‘g‘ri tanlov!Zamonaviy pazandalik sirlarini o‘rganib, o‘z oilangizni xursand qiling yoki o‘z biznesingizni boshlang!"
  const videos = [video1, video2, video3];
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const list = [
    "Qandolatchilik kursi",
    "Jahon taomlari kursi",
    "Uyg'ur taomlar kursi",
    "Lazzatli taomlar kursi",
    "Milliy taomlar kursi",
    "Nonushta kursi",
    "Tortlarni bezatish oliy kursi",
    "Yevro perojniy tayuorlash kursi",
    "Karving kursi",
    "Shokoladli kompazitsiya kursi",
    "Oliy tort kursi",
  ]

  return (

    <>
      {/*  */}
      <Background backgroundImg={Cake} title={title} text={text} />
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-center text-[#911a1b] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Tortlarni bezatish va pishiriqlar tayyorlash bo'yicha kursidan foto lavhalar. Shogirdlarimiz tomonidan tayyorlangan shirinliklar.
          </motion.h2>

          <ImagesGallery Images={images} />
          <motion.div
            className="mt-10 text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-medium">Pazandachilik bo'limi quyidagi kurslarga bo'linadi:</p>
            <Lists list={list} />
          </motion.div>
          <Videos videos={videos} />

        </div>
      </section>

    </>

  );
};

export default Pazandachilik;

