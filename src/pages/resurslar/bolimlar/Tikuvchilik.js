import React from "react";
import { motion } from "framer-motion";
import Background from "../../../components/Background";
import Videos from "../../../components/Videos";
import ImagesGallery from "../../../components/ImagesGallery";
import Lists from "../../../components/Lists";

// Image imports
import TailorBG from "../../../assets/images/TailorBG.jpg";
import Image1 from "../../../assets/images/tikuvchilik1.jpg";
import Image2 from "../../../assets/images/tikuvchilik2.jpg";
import Image3 from "../../../assets/images/tikuvchilik3.jpg";

// Video imports

import video1 from "../../../assets/videos/tikuvchilik1.mp4";
import video2 from "../../../assets/videos/tikuvchilik2.mp4";
import video3 from "../../../assets/videos/tikuvchilik3.mp4";

const Tikuvchilik = () => {

  const title = "Tikuvchilik kurslari";
  const text = "Boshlang‘ichdan to professional darajagacha: tajribali ustozlar, zamonaviy mashg‘ulotlar, real loyihalar."
  const videos = [video1, video2, video3];
  const images = [Image1, Image2, Image3];
  const list = ["Tikish va bichish kursi",
    "Boshlang'ich tikish bichish kursi",
    "Yuqori dizaynli parda kursi",
    "Erkaklar va ayollar shimi kursi",
    "Astarli kastyum kursi",
    "Modellashtirish kursi",
    "Oliy modellashtirish kursi",
    "To'y liboslari kursi",
    "Atlas va adras milliy liboslar kursi"
  ]

  return (

    <>
      {/*  */}
      <Background backgroundImg={TailorBG} title={title} text={text}/>
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">

          <motion.p
            className="text-center text-gray-500 max-w-3xl mx-auto mb-12 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            O‘quv markazimizda “Tikish va bichish” bo‘yicha kurslar tashkil etilgan.
            Xurmatli ota-onalar agar qizingizning kelajakda hunarli bo‘lib,
            qo‘shimcha daromad topishini hohlasangiz bugunoq “Iffatli kelin” o‘quv markaziga yuboring.
            Hunarli kishi hor bo‘lmas degan maqol bor xalqimizda.
            Yuqori malakaga ega bo‘lgan ustozlar barcha bilim va ko‘nikmalarini Siz bilan bo‘lishishga tayyor.
          </motion.p>

          <ImagesGallery Images={images} />
          <motion.div
            className="mt-10 text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-medium">O'quv markazimizda tikish-bichish bo'yicha quyidagi kurslar mavjud:</p>
            <Lists list={list} />
          </motion.div>
          <Videos videos={videos} />

        </div>
      </section>

    </>

  );
};

export default Tikuvchilik;
