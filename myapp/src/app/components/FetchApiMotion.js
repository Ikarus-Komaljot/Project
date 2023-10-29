'use client'
import { motion } from "framer-motion"

export default function FetchApiMotion(){
return (
    <div>
          <motion.h1
      className="text-center mt-20 mb-10 text-4xl font-bold font-sans"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      Our Blogs
    </motion.h1>
      <hr className="w-1/5 mx-auto"></hr>
    </div>
)
}