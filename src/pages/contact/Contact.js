// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTelegramPlane, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

// const ContactPage = () => {
//   return (
//     <div className="p-6 max-w-6xl mx-auto" style={{height:`calc(100vh - 80px)`}}>
//       <h1 className="text-2xl md:text-3xl font-bold text-pink-700 text-center mb-8">Biz Bilan Bog‘laning</h1>

//       {/* Bosh idora */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-2">Bosh idora</h2>
//         <div className="space-y-2 text-gray-600">
//           <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-pink-600" /> Toshkent shahri, Chilonzor tumani, Kichik Halqa Yo'li ko‘chasi, 16-uy</p>
//           <p className="flex items-center"><FaPhone className="mr-2 text-pink-600" /> +998 90 123 45 67</p>
//           <p className="flex items-center"><FaPhone className="mr-2 text-pink-600" /> +998 93 765 43 21</p>
//           <p className="flex items-center"><FaEnvelope className="mr-2 text-pink-600" /> Iffatli_kelin@mail.ru</p>
//         </div>
//       </div>

//       {/* Filiallar */}
//       <div className="mb-10">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Hududiy filiallar</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600">
//           <div>
//             <h3 className="font-medium">Toshkent Yunusobod tumani</h3>
//             <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-pink-500" /> Yunusobod 11-mavzesi</p>
//             <p className="flex items-center"><FaPhone className="mr-2 text-pink-500" /> +998 91 234 56 78</p>
//           </div>
//           <div>
//             <h3 className="font-medium">Andijon filiali</h3>
//             <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-pink-500" />170100, Andijon viloyati, Andijon Bobur shoh ko'chasi, 16A</p>
//             <p className="flex items-center"><FaPhone className="mr-2 text-pink-500" /> +998 94 345 67 89</p>
//           </div>
//           <div>
//             <h3 className="font-medium">Samarqand filiali</h3>
//             <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-pink-500" />140800, Samarqand viloyati, Kattaqo'rg'on, Navoiy ko'chasi, 177</p>
//             <p className="flex items-center"><FaPhone className="mr-2 text-pink-500" /> +998 97 123 45 67</p>
//           </div>
//           <div>
//             <h3 className="font-medium">Namangan filiali</h3>
//             <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-pink-500" />161100, Namangan viloyati, Chust</p>
//             <p className="flex items-center"><FaPhone className="mr-2 text-pink-500" /> +998 99 987 65 43</p>
//           </div>
//         </div>
//       </div>

//       {/* Telegram bot */}
//       <div className="mb-10">
//         <h2 className="text-xl font-semibold text-gray-800 mb-2">Telegram bot</h2>
//         <a
//           href="https://t.me/iffatlikelinbot"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium"
//         >
//           <FaTelegramPlane className="mr-2" /> @IffatliKelin_bot
//         </a>
//       </div>

//       {/* Ijtimoiy tarmoqlar */}
//       <div>
//         <h2 className="text-xl font-semibold text-gray-800 mb-2">Ijtimoiy tarmoqlar</h2>
//         <div className="flex flex-wrap gap-4 text-pink-600 text-lg">
//           <a href="https://instagram.com/iffatlikelin" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-800">
//             <FaInstagram className="mr-2" /> instagram.com/iffatlikelin
//           </a>
//           <a href="https://facebook.com/iffatlikelin" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-800">
//             <FaFacebook className="mr-2" /> facebook.com/iffatlikelin
//           </a>
//           <a href="https://youtube.com/iffatlikelin" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-800">
//             <FaYoutube className="mr-2" /> youtube.com/iffatlikelin
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;



import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTelegramPlane, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-pink-700 text-center mb-10">Bog‘lanish</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Ma'lumotlar qismi */}
        <div className="lg:w-1/2 space-y-8">
          {/* Bosh idora */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Bosh idora</h2>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-pink-600" /> Toshkent shahri, Chilonzor tumani, Kichik Halqa Yo'li ko‘chasi, 16</p>
              <p className="flex items-center"><FaPhone className="mr-2 text-pink-600" /> +998 71 279 16 81</p>
              <p className="flex items-center"><FaPhone className="mr-2 text-pink-600" /> +998 95 144 85 10</p>
              <p className="flex items-center"><FaPhone className="mr-2 text-pink-600" /> +998 98 800 85 10</p>
              <p className="flex items-center"><FaEnvelope className="mr-2 text-pink-600" /> Iffatli_kelin@mail.ru</p>
            </div>
          </div>

          {/* Filiallar */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Filiallar</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-medium">Toshkent Yunusobod filiali</h3>
                <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-pink-500" /> Yunusobot 11-mavzesi</p>
                <p className="flex items-center"><FaPhone className="mr-2 text-pink-500" /> +998 71 223 91 70</p>
                <p className="flex items-center"><FaPhone className="mr-2 text-pink-500" /> +998 94 808 03 33</p>
              </div>
              <div>
                <h3 className="font-medium">Andijon filiali</h3>
                <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-pink-500" /> 170100, Andijon viloyati, Andijon Bog'i Shoh ko‘chasi, 16A</p>
                <p className="flex items-center"><FaPhone className="mr-2 text-pink-500" /> +998 90 210 58 00</p>

              </div>
              <div>
                <h3 className="font-medium">Samarqand filiali</h3>
                <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-pink-500" />140800, Samarqand Viloyati, Kattaqo'rg'on, Navoiy ko'chasi, 177</p>
                <p className="flex items-center"><FaPhone className="mr-2 text-pink-500" /> +998 94 185 88 44</p>
                <p className="flex items-center"><FaPhone className="mr-2 text-pink-500" /> +998 66 455 11 21</p>
              </div>

              <div>
                <h3 className="font-medium">Namangan filiali</h3>
                <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-pink-500" />161100, Namangan viloyati, Chust</p>
                <p className="flex items-center"><FaPhone className="mr-2 text-pink-500" /> +998 69 423 12 21</p>
                <p className="flex items-center"><FaPhone className="mr-2 text-pink-500" /> +998 91 367 06 44</p>
              </div>
            </div>
          </div>

          {/* Telegram bot */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Telegram bot</h2>
            <a href="https://t.me/iffatlikelinbot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium">
              <FaTelegramPlane className="mr-2" /> @IffatliKelin_bot
            </a>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Ijtimoiy tarmoqlar</h2>
            <div className="flex flex-col gap-2 text-pink-600">
              <a href="https://instagram.com/iffatlikelin" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-800">
                <FaInstagram className="mr-2" /> instagram.com/iffatlikelin
              </a>
              <a href="https://facebook.com/iffatlikelin" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-800">
                <FaFacebook className="mr-2" /> facebook.com/iffatlikelin
              </a>
              <a href="https://youtube.com/iffatlikelin" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-800">
                <FaYoutube className="mr-2" /> youtube.com/iffatlikelin
              </a>
            </div>
          </div>
        </div>

        {/* Lokatsiya qismi */}
        <div className="lg:w-1/2 w-full h-[400px]">
          <iframe
            title="Google Map"
            className="w-full h-full rounded-xl border"
            src="https://www.google.com/maps?q=41.270987,69.210240&hl=es;z=16&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


