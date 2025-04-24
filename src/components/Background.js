import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import MainTilte from './MainTitle';


export default function Background({ backgroundImg,title,text }) {
    const [isMdUp, setIsMdUp] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMdUp(window.innerWidth >= 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize); // On resize

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <section className="relative flex items-center justify-center px-4 h-[calc(100vh-85px)] overflow-hidden">
            {/* Background - only set image on md and up */}
            <div
                className="absolute inset-0 z-0 bg-[#EC3D79] bg-center bg-cover"
                style={isMdUp ? { backgroundImage: `url(${backgroundImg})` } : {}}
            />

            {/* Gradient overlay - only on md and up */}
            {isMdUp && (
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#EC3D79] via-[#EC3D79] to-transparent" style={{ opacity: 1 }} />
            )}



            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start md:justify-start">
                <motion.div
                    className="w-full md:max-w-xl text-center md:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                   <MainTilte title={title} />
                    <motion.p
                        className="text-xl text-gray-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        {text}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
