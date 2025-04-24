import React from "react";

// import qilish uchun  kitoblar
import kitob1 from "../../../assets/books/Vaqt.txt";
import kitob2 from "../../../assets/books/Dangasalik.txt";
import kitob3 from "../../../assets/books/Vaqtmuvaffaqiyat.txt";
import kitob4 from "../../../assets/books/Vaqtniboshqaring.txt";
import kitob5 from "../../../assets/books/Vaqtnitogritashkil.txt";
import kitob6 from "../../../assets/books/Muomala.apk";
import kitob7 from "../../../assets/books/Notiqlik.apk";
import kitob8 from "../../../assets/books/ishonch.pdf";
import kitob9 from "../../../assets/books/Kelinlar.pdf";

import { FaEye, FaDownload, FaBook } from "react-icons/fa"; // Iconlar uchun

const books = [
    { title: "Vaqtdan unumli foydalanish", file: kitob1 },
    { title: "Dangasalik davosi", file: kitob2, },
    { title: "Vaqtni boshqaring", file: kitob3, },
    { title: "Vaqt va muvaffaqiyat", file: kitob4, },
    { title: "Vaqtni to'g'ri tashkil qilish", file: kitob5, },
    { title: "Muomala sirlari", file: kitob6, },
    { title: "Notiqlik san'ati", file: kitob7, },
    { title: "O'ziga nisbatan ishonch", file: kitob8, },
    { title: "Kelinlar daftariga", file: kitob9, },
];

const BooksPage = () => {
    return (
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
    );
};

export default BooksPage;
