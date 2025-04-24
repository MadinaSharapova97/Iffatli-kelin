import React from "react";
import { motion } from "framer-motion";
import Background from "../../../components/Background";
import Videos from "../../../components/Videos";
import Lists from "../../../components/Lists";

// Image imports
import KomputerBg from "../../../assets/images/ComputerBg.jpg";


// Video imports

import video1 from "../../../assets/videos/bugalteriya-1.MP4";
import video2 from "../../../assets/videos/bugalteriya-2.MP4";
import video3 from "../../../assets/videos/bugalteriya-3.MP4";

const Kompyuter = () => {

  const title = "Kompyuter kurslari";
  const text = "Kompyuterni mukammal o‘rganing – zamonga hamnafas bo‘ling!"
  const videos = [video1, video2, video3];
  const list = [
    "Kompyuter savodxonligi kursi",
    "Bugalteriya kursi",
    "Exsel kurslari",
  ]

  return (

    <>
      {/*  */}
      <Background backgroundImg={KomputerBg} title={title} text={text} />
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-2xl md:text-xl font-semibold text-[#911a1b] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            O‘quv markazimizda “Kompyuter kurslari” bo‘yicha kurslar tashkil etilgan. 21-asr zamonaviy texnologiyalar asridir. Hozirgi kunda har bir shaxs kompyuterdan foydalanishni bilishi kerak. Barcha opa-singillarimizni ushbu o‘quv kursiga taklif etamiz.  Har bir dars amaliyot bilan uyg‘unlikda olib boriladi.
            Yuqori malakaga ega bo‘lgan ustozlar barcha bilim va ko‘nikmalarini Siz bilan bo‘lishishga tayyor.          </motion.h2>
          <motion.div
            className="my-10 text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-medium">Kompyuter bo'limi quyidagi kurslarga bo'linadi:</p>
            <Lists list={list} />
          </motion.div>
          <Videos videos={videos} />

        </div>
      </section>

    </>

  );
};

export default Kompyuter;

