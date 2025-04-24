import React from 'react'
import { motion } from "framer-motion";


export default function Videos({ videos }) {
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
    return (
        <div className="py-10 px-4 max-w-6xl mx-auto">
            {/* 3 ta video */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
    )
}
