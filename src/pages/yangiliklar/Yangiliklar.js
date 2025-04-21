import React from "react";
import { motion } from "framer-motion";
import video1 from "../../assets/videos/video1.MP4"
import video2 from "../../assets/videos/video2.MP4"
import video3 from "../../assets/videos/video3.MP4"
import img from "../../assets/images/yutuqlar.jpg"

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function NewsSection() {
  const videos = [video1, video2, video3];

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold text-center mb-10 text-[#911a1b]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariant}
        custom={0}
      >
        Yangiliklar
      </motion.h2>

      {/* Yangiliklar matni */}
      <motion.div
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariant}
        custom={1}
      >
        <p className="text-lg leading-relaxed text-gray-700">
          So‘nggi haftalarda "Iffatli kelin" loyihasida ko‘plab ijobiy o‘zgarishlar yuz berdi. Yangi darslar, interaktiv mashg‘ulotlar va turli tadbirlar orqali ishtirokchilarimiz ko‘plab foydali bilimlarga ega bo‘lishmoqda.
        </p>
      </motion.div>

      {/* 3 ta video */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {videos.map((src, i) => (
          <motion.video
            key={i}
            className="w-full h-64 rounded-xl shadow-md object-cover"
            controls
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeVariant}
            custom={i + 2}
          >
            <source src={src} type="video/mp4" />
            Sizning brauzeringiz video tag'ni qo‘llab-quvvatlamaydi.
          </motion.video>
        ))}
      </div>

      {/* O‘quvchilar yutuqlari */}
      <motion.div
        className=" p-6 rounded-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariant}
        custom={5}
      >
        <h3 className="text-2xl font-semibold mb-4 text-[#911a1b]">O‘quvchilarimizning yutuqlari</h3>
        <p className="mb-4 text-lg text-gray-700">
        ‘Iffatli kelin’ tashabbusi doirasida hamshiralik kursini muvaffaqiyatli yakunlagan ishtirokchilarga tantanali ravishda sertifikatlar topshirildi. 
        Bu ular uchun katta yutuq, biz uchun esa faxrli lahza bo‘ldi.
        </p>
        <motion.img
          src={img}
          alt="O‘quvchilar yutuqlari"
          className="w-full rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariant}
          custom={6}
        />
      </motion.div>
    </section>
  );
}
