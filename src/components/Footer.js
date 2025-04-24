import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='pt-[5rem] pb-[5rem]'>
        <div className='text-center'>
          <h1 className='text-[28px] sm:text-[38px] md:text-[50px] custom-playfair uppercase text-[#ec3d79]'>Bilim sari ilk qadamni biz bilan qo‘ying!</h1>

          <div className='flex items-center space-x-2 mt-[3rem] justify-center'>
            {/* input */}
            <input type="email" placeholder='Email Address' className='px-5 py-4 bg-gray-300 w-[40%] outline-none rounded-lg placeholder:text-black' />
            {/* Subscribe button */}
            <button className='px-8 py-4 bg-[#911a1b] hover:bg-[#f75d93] transition-all duration-200 rounded-md text-white font-bold'>Yuborish</button>
          </div>
        </div>
      </div>



      <div className='pt-[5rem] pb-[3rem] bg-[#911a1b] '>
        <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start'>
          {/* 1st part */}
          <div>
            {/* Logo */}
            <div className='flex items-center text-white space-x-2'>
              {/* <FaBurger className='w-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500' /> */}
              <h1 className='text-[20px] sm:text-[30px] font-semibold'>Iffatli Kelin</h1>
            </div>
            <p className='text-white text-opacity-60 mt-[0.4rem]'>
              "Iffatli Kelin" o‘quv markazi – har bir ayol o‘z salohiyatini kashf etadigan, bilim va hunarni uyg‘unlashtiradigan ilhomlantiruvchi muhit.
            </p>
            <p className='mt-[1rem] text-white'>Iffatli_kelin@mail.ru</p>
            <p className='text-yellow-300 text-[19px] font-bold'>+998 71 279 16 81</p>
          </div>
          {/* 2nd part */}
          <div>
            <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Kurslar</h1>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Tikuvchilik</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Pazandachilik</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Hamshiralik</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Makiyaj va Soch</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Oila Psixologiyasi</p>
          </div>
          {/* 3rd part */}

          <div>
            <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Tezkor Link</h1>
            <ul>
              <li><Link to="/about" className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Biz Haqimizda</Link></li>
              <li><Link to="/kurslar" className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Kurslar</Link></li>
              <li><Link to="/contact" className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Bog'lanish</Link></li>
              <li><Link to="/yangiliklar" className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Yangiliklar</Link></li>
              <li><Link to="kutubxona" className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">Media Kutubxona</Link></li>
            </ul>
          </div>


          {/* 4th part */}
          <div>
            <h1 className='text-[23px] font-semibold mb-[2rem] uppercase text-white'>Ish Vaqti</h1>
            <p className='text-white text-[18px]'>Dushanba - Juma : <span className='text-yellow-300'>8am - 4pm</span></p>
            <p className='text-white text-[18px]'>Shanba : <span className='text-yellow-300'>8am - 12pm</span></p>
            {/* social icons */}
            <div className='flex mt-[2rem] items-center space-x-6'>
              <FaFacebook className="w-[1.5rem] h-[1.5rem] text-blue-600" />
              <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-400" />
              <FaTwitter className="w-[1.5rem] h-[1.5rem] text-blue-300" />
            </div>
          </div>
        </div>
        {/*copyright text*/}
        <p className='text-center text-white opacity-50 mt-[1.5rem]'>
          Copyright @ 2024 <span className='text-yellow-300'>WebDev Warriors</span>. All rights reserved</p>
      </div>
    </>

  )
}

export default Footer;