import React from 'react'
import { motion } from "framer-motion";

export default function Lists({ list }) {
    return (
        <motion.div
            className="mt-10 text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
        >
            <ul className="list-disc pl-5">
                {list.map((item, i) => (
                    <li key={i} className="mb-1">
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}
