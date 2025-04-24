import React from 'react'
import { motion } from "framer-motion";

export default function ImagesGallery({Images}) {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {Images.map((img, index) => (
                <motion.div
                    key={index}
                    className="overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src={img} alt={`kurs ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                    <div className="p-4 text-gray-700 text-center">

                    </div>
                </motion.div>
            ))}
        </div>
    )
}
