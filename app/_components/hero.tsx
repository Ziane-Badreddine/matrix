"use client"

import React from 'react'
import { Backpack, Divide, Dot, Minus, Plus } from "lucide-react";
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-full w-full relative   "
        >         
            <Plus size={32} className=" absolute -left-2 -top-2 animate-spin" />
            <Minus size={32} className=" absolute right-0 top-0 animate-spin" />
            <Dot size={32} className=" absolute left-0 bottom-0 animate-ping" />
            <Divide size={32} className=" absolute right-0 bottom-0 animate-spin" />
        </motion.div>
    )
}

export default Hero