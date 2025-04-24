
import React from "react";
import { motion } from "framer-motion";
import Background from "../../../components/Background";
import Videos from "../../../components/Videos";
import ImagesGallery from "../../../components/ImagesGallery";
import Lists from "../../../components/Lists";

// Image imports
import MakeUpBG from "../../../assets/images/make-upBG.jpg";
import Image1 from "../../../assets/images/makiyaj1jpg.jpg";
import Image2 from "../../../assets/images/makiyaj2.jpg";
import Image3 from "../../../assets/images/makiyaj3.jpg";
import Image4 from "../../../assets/images/makiyaj4.jpg";
import Image5 from "../../../assets/images/makiyaj5.jpg";
import Image6 from "../../../assets/images/makiyaj6.jpg";


// Video imports

import video1 from "../../../assets/videos/makiyaj-1.MP4";
import video2 from "../../../assets/videos/makiyaj-2.MP4";
import video3 from "../../../assets/videos/makiyaj-3.MOV";
import video4 from "../../../assets/videos/makiyaj-4.MP4";
import video5 from "../../../assets/videos/makiyaj-5.MP4";
import video6 from "../../../assets/videos/makiyaj-6.MP4";
import video7 from "../../../assets/videos/makiyaj-7.MP4";

const Makiyaj = () => {

  const title = "Makiyaj va soch turmaklash kurslari";
  const text = "Makiyaj va soch san’atining sir-asrorlarini biz bilan o‘zlashtiring!"
  const videos = [video1, video2, video3, video4, video5, video6, video7];
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const list = [
    "Kosmetologiya kursi",
    "Manikyur kursi-pedikur kursi",
    "Tirnoq o'stirish kursi",
    "Vizajist kursi",
    "Stilist va vizajist kursi",
    "Sartaroshlik kursi",
  ]

  return (

    <>
      {/*  */}
      <Background backgroundImg={MakeUpBG} title={title} text={text} />
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">

          <motion.h2
            className="text-xl md:text-xl font-semibold text-[#911a1b] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            O‘quv markazimizda “Makiyaj va soch turmaklash ” bo‘yicha kurslar tashkil etilgan.
            Barcha opa-singillarimizni ushbu o‘quv kursiga taklif etamiz. Qadimdan sartaroshlik kasbi “o‘lmaydigan”
            kasblar sirasiga kiradi. O‘quv kursimizda soch turmaklashning barcha sir sinoatlari o‘rgatiladi.
            Har bir dars amaliyot bilan uyg‘unlikda olib boriladi.
          </motion.h2>

          <motion.div
            className="my-10 text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-medium">O'quv markazimizda ushbu yo'nalishdagi kurslar mavjud:</p>
            <Lists list={list} />
          </motion.div>
          <ImagesGallery Images={images} />

          <Videos videos={videos} />

        </div>
      </section>

    </>

  );
};

export default Makiyaj;

