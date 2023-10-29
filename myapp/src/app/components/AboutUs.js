"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import img2 from "../images/img2.png";
import img1 from "../images/img1.png";
const AboutSection = () => {
  return (
    <>
      {/* <br className="border-2 border-gray-400"/> */}
      <section id="aboutus" className="bg-black text-gray-300 py-16 px-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-4 text-[#24d2deb6] font-mono  ">
              About Us
            </h2>
            <hr className="border-1 mb-11" />
            <div className="flex flex-row space-x-10">
              <Image src={img1} className="h-[20%] w-[20%] mb-3 " />
              {/* <Image src={img1} className="h-[10%] w-[30%]   " /> */}

              <p className="text-lg mb-3 mt-5">
                Demo text- About section, brings you an immersive and visually
                stunning reading experience. Our team of experienced writers and
                experts is committed to delivering well-researched and
                thought-provoking articles, guides, and reviews that cater to
                your interests and needs. We aim to keep you informed,
                entertained, and inspired through every piece we publish.
               
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Individual blog features or highlights */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-[#209fa8b6] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Demo1</h3>
              <p className="text-gray-200">
                Our blogs are aesthetically pleasing. The minimalistic approach
                ensures readability while exuding sophistication.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-[#209fa8b6] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Demo1</h3>
              <p className="text-gray-200">
                Our blogs are aesthetically pleasing. The minimalistic approach
                ensures readability while exuding sophistication.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-[#209fa8b6] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Demo1</h3>
              <p className="text-gray-200">
                Our blogs are aesthetically pleasing. The minimalistic approach
                ensures readability while exuding sophistication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
