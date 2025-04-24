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

// import qilish uchun  kitoblar
import kitob1 from "../../../assets/books/kitob1.pdf";
import kitob2 from "../../../assets/books/kitob2.docx";
import kitob3 from "../../../assets/books/kitob3.doc";
import kitob4 from "../../../assets/books/kitob4.apk";
import kitob5 from "../../../assets/books/kitob5.apk";
import kitob6 from "../../../assets/books/kitob6.apk";
import kitob7 from "../../../assets/books/kitob7.apk";
import kitob8 from "../../../assets/books/kitob8.apk";

import { FaBook, FaDownload, FaEye } from "react-icons/fa";

const books = [
  { title: "Тест по русскому и узбекскому языкам", file: kitob1 },
  { title: "Rust tili va adabiyoti", file: kitob2 },
  { title: "Rus tili", file: kitob3 },
  { title: "Русско-узбекский словарь", file: kitob4 },
  { title: "RUS-UZB 1.0", file: kitob5 },
  { title: "Rosetta course", file: kitob6 },
  { title: "LingueLeo", file: kitob7 },
  { title: "Ertaklar", file: kitob8 },
];

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
        <div className="overflow-x-auto p-4 max-w-6xl w-full mx-auto">

          <style>{`
                @keyframes fadeIn {
                  0% { opacity: 0; transform: translateY(20px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                .fade-in {
                  opacity: 0;
                  animation: fadeIn 0.6s ease-out forwards;
                }
              `}</style>
          <h2 className="fade-in text-xl md:text-4xl text-center text-[#911a1b]">Kitoblar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="p-4  fade-in"
                style={{ animationDelay: `${0.3 + index * 0.2}s` }}
              >
                <div className="flex justify-center items-center h-40 text-yellow-300 text-9xl">
                  <FaBook />
                </div>

                {/* Kitob sarlavhasi */}
                <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">{book.title}</h2>

                {/* Ko‘rish va Yuklab olish tugmalari */}
                <div className="flex justify-center gap-3">
                  {/* Brauzerda ko‘rish */}
                  <a
                    href={book.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#ec3d79] text-white rounded-md hover:bg-[#f1729e] transition flex items-center gap-2"
                  >
                    <FaEye /> Ko‘rish
                  </a>

                  {/* Yuklab olish */}
                  <a
                    href={book.file}
                    download
                    className="px-4 py-2 bg-[#911a1b] text-white rounded-md hover:bg-[#5b0f10] transition flex items-center gap-2"
                  >
                    <FaDownload /> Yuklab olish
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>

  );
};

export default TilKurslari;

