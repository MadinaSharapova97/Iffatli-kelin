import React from "react";

const courses = [
  { id: 1, name: "Tikish bichish kursi", duration: "3 oylik", price: "500 000 so'm" },
  { id: 2, name: "Boshlang'ich tikish bichish kursi", duration: "4 oylik", price: "500 000 so'm" },
  { id: 3, name: "Biser tikish kursi", duration: "2 oylik", price: "500 000 so'm" },
  { id: 4, name: "Bijuteriya ", duration: "1 oylik", price: "500 000 so'm" },
  { id: 5, name: "Yuqori dizaynli parda kursi", duration: "2 oylik", price: "500 000 so'm" },
  { id: 6, name: "Erkaklar va ayolar shimi kursi", duration: "1 oylik", price: "600 000 so'm" },
  { id: 7, name: "Astarli kostyum kursi", duration: "2 oylik", price: "700 000 so'm" },
  { id: 8, name: "Modellashtirish kursi", duration: "2 oylik", price: "700 000 so'm" },
  { id: 9, name: "Oliy modellashtirish kursi", duration: "1 oylik", price: "800 000 so'm" },
  { id: 10, name: "To'y liboslari kursi", duration: "2 oylik", price: "1000 000 so'm" },
  { id: 11, name: "Atlas va adras milliy liboslar kursi", duration: "1 oylik", price: "550 000 so'm" },
  { id: 12, name: "Kashtachilik kursi", duration: "1.5 oylik", price: "500 000 so'm" },
  { id: 13, name: "Tibbiy yordam bilim asoslari kursi", duration: "3 oylik", price: "600 000 so'm" },
  { id: 14, name: "Massaj kursi", duration: "2 oylik", price: "700 000 so'm" },
  { id: 15, name: "Kosmetologiya kursi", duration: "1 oylik", price: "800 000 so'm" },
  { id: 16, name: "Manikyur-pedikyur kursi", duration: "1 oylik", price: "500 000 so'm" },
  { id: 17, name: "Tirnoq o'stirish kursi", duration: "5 ta dars", price: "800 000 so'm" },
  { id: 18, name: "Tatuaj kursi", duration: "3 oylik", price: "800 000 so'm" },
  { id: 19, name: "Qosh va kiprik laminatsiyasi kursi", duration: "5 ta dars", price: "700 000 so'm" },
  { id: 20, name: "Vizajist kursi", duration: "2 oylik", price: "500 000 so'm" },
  { id: 21, name: "Stilist va vizajist kursi", duration: "1-2 oylik", price: "800 000 so'm" },
  { id: 22, name: "Qandolatchilik kursi", duration: "2 oylik", price: "600 000 so'm" },
  { id: 23, name: "Jahon taomlari kursi", duration: "1 oylik", price: "500 000 so'm" },
  { id: 24, name: "Uyg'ur taomlari kursi", duration: "2 oylik", price: "650 000 so'm" },
  { id: 25, name: "Lazzatli taomlar kursi", duration: "1 oylik", price: "500 000 so'm" },
  { id: 26, name: "Milliy taomlar kursi", duration: "1 oylik", price: "500 000 so'm" },
  { id: 27, name: "Nonushta kursi", duration: "1 oylik", price: "500 000 so'm" },
  { id: 28, name: "Tortlarni bezatish oliy kursi", duration: "1-2 oylik", price: "800 000 so'm" },
  { id: 29, name: "Yevro perojniy tayyorlash kursi", duration: "1 oylik", price: "800 000 so'm" },
  { id: 30, name: "Karving kursi", duration: "2 oylik", price: "650 000 so'm" },
  { id: 31, name: "Shokoladli kompozitsiya kursi", duration: "1 oylik", price: "650 000 so'm" },
  { id: 32, name: "Qo'lda tikish kursi", duration: "2-3 oylik", price: "500 000 so'm" },
  { id: 33, name: "Sun'iy gul yasash kursi", duration: "1 oylik", price: "500 000 so'm" },
  { id: 34, name: "Kelinlikka tayyorlash kursi", duration: "1 oylik", price: "500 000 so'm" },
  { id: 35, name: "Sarpo quti kursi", duration: "1 oylik", price: "500 000 so'm" },
  { id: 36, name: "Kompyuter kursi", duration: "2 oylik", price: "500 000 so'm" },
  { id: 37, name: "Rus va ingliz tili kursi", duration: "3 oylik", price: "800 000 so'm" },
  { id: 38, name: "Bugalteriya kursi", duration: "2 oylik", price: "800 000 so'm" },
  { id: 39, name: "Oila psixologiyasi kursi", duration: "1 oylik", price: "Bepul" },
  { id: 40, name: "Konservalash kursi", duration: "1 oylik", price: "500 000 so'm" },
  // ...
  // Davom ettirib 50 tagacha qo‘shib chiqasiz
];

const CourseTable = () => {
  return (
    <div className="overflow-x-auto p-4 max-w-5xl w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-pink-700">Iffatli kelin - Kurslar ro'yxati</h2>
      <p className="text-gray-700 font-semibold my-5 text-center">"Iffatli kelin" o‘quv markazi pastda ko‘rsatilgan yo‘nalishlar bo‘yicha o‘qishga taklif qiladi.
       Barcha o‘quv kurslari amaliyot bilan birgalikda o‘qitiladi. Ilmga chanqoq, hunar o‘rganishga ishtiyoqli 
       yoshlar! Yuqori malakali ustoz-muallimlar sizlarga o‘z bilimlarini ulashishga doimo tayyor! O‘quv kursini
        bitirgandan so‘ng bitiruvchilarga maxsus diplom va sertifikatlar topshiriladi. 
      O‘quv markazimizda 40 dan ortiq kurslar mavjud. Keling, o‘rganing va hunarli bo‘ling.</p>
      <table className="table-auto w-full border border-gray-300 text-sm text-left">
        <thead className="bg-pink-100">
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Kurs yo'nalishi</th>
            <th className="border px-4 py-2">Davomiyligi</th>
            <th className="border px-4 py-2">Narxi</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="hover:bg-pink-50">
              <td className="border px-4 py-2">{course.id}</td>
              <td className="border px-4 py-2">{course.name}</td>
              <td className="border px-4 py-2">{course.duration}</td>
              <td className="border px-4 py-2">{course.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
