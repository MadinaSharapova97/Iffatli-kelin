import React from 'react';
import Xodimlar from '../../assets/images/xodimlar2.jpg';
import { motion } from 'framer-motion';
import Img1 from '../../assets/images/card1.jpg'
import Img2 from '../../assets/images/card2.jpg'
import Img3 from '../../assets/images/card3.jpg'
import Img4 from '../../assets/images/card4.jpg'
import Img5 from '../../assets/images/card5.jpg'
import Img6 from '../../assets/images/card6.jpg'
import Img7 from '../../assets/images/card7.jpg'
import Img8 from '../../assets/images/card8.jpg'


const About = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
  return (
    <>

      <div className="pt-10 px-4 md:px-12 lg:px-32 bg-pink-50 pb-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#911a1b] mb-4">Biz haqimizda</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            "Iffatli kelin" o‘quv markazi — bu zamonaviy bilimlar bilan iffatli hayotni uyg‘unlashtirgan noyob maskan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Rasm qismi */}
          <img
            src={Xodimlar}
            alt="Xodimlar"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />

          {/* Matn qismi */}
          <div className="text-gray-800 space-y-6 ">
            <p className='text-xl md:text-2xl font-semibold  leading-loose'>
              "Iffatli Kelin" o'quv markazi 2001 yilda tashkil topgan. Bunda Soliha Fathullayeva boshchiligida Sabiha Fathullayeva,
              Ra’no Fathullayeva 4 ta opa-singil tashkil qilgan. Dastlab dasturda 8 turdagi kurslar mavjud edi. 3 yildan so’ng Samarqand
              viloyati Kattaqo’rg’on shahrida birinchi filialini ochildi. Keyin butun O’zbekiston bo’ylab 14 ta filialini ochishdi.
              Hozirgi kunda 5 ta filiali bor va kurslar ro'yxati o'z yo'nalishi bo'yicha 40 xil kurslarni o'z ichiga oladi.
            </p>

          </div>
        </div>
      </div>

      {/* Cards */}

      <div className=" bg-pink-50 px-4 pt-12 pb-[50px] md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>

  );
};

export default About;
