"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Divide, Dot, Minus, Plus } from 'lucide-react'

const items = [
    <Plus size={32} className="  animate-spin" />,
    <Minus size={32} className="  animate-spin" />,
    <Dot size={32} className="  animate-ping" />,
    <Divide size={32} className=" animate-spin" />,
]





const BorderAnimation = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-full w-[7%] grid grid-cols-4"
        >
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{  y: "-100%",opacity: 1  }}
                    animate={{ y: 1000,opacity: 0.5 }}
                    transition={{delay: index*0.1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                    {item}
                </motion.div>))}
        </motion.div>

    )
}

export default BorderAnimation