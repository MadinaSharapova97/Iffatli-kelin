import React from "react";
import { motion } from "framer-motion";
import Background from "../../../components/Background";
import Videos from "../../../components/Videos";
import Lists from "../../../components/Lists";

// Image imports
import LanguageBg from "../../../assets/images/LanguageBg.jpg";

// Video imports

import video1 from "../../../assets/videos/lang1.mp4";
import video2 from "../../../assets/videos/lang2.mp4";
import video3 from "../../../assets/videos/lang3.mp4";
import video4 from "../../../assets/videos/lang4.mp4";
import video5 from "../../../assets/videos/lang5.mp4";
import video6 from "../../../assets/videos/lang6.mp4";
import video7 from "../../../assets/videos/lang7.mp4";
import video8 from "../../../assets/videos/lang8.mp4";
import video9 from "../../../assets/videos/lang9.mp4";
import video10 from "../../../assets/videos/lang10.mp4";

const TilKurslari = () => {

  const title = "Til kurslari";
  const text = "Xorijiy tilni o‘rganing — dunyoni kashf eting!"
  const videos = [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10];
  const list = [
    "Sòzlashuv",
    "Grammatika va sizga qiyinchilik tug'dirayotgan ingliz va rus tilidagi kitoblar va xujjatlar tarjimalarini òrganishingiz mumkin.",

  ]

  return (

    <>
      {/*  */}
      <Background backgroundImg={LanguageBg} title={title} text={text} />
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-2xl md:text-xl text-center font-semibold text-center text-[#911a1b] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Ingliz va Rus tillarini tez va oson òrganishni xohlaysizmi?
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
          <Videos videos={videos} />

        </div>
      </section>

    </>

  );
};

export default TilKurslari;

