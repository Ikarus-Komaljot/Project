'use client'
import Image from 'next/image';
import blogimg from '../images/blogimg.png';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedTextWord from './AnimatedTextWord';
import AnimatedTextChar from './AnimatedTextChar';

export default function LandingPage
() {
  return (
    <>
      <div className='relative '>
        <Image
          src={blogimg}
          className=' w-full h-auto'
          alt='landingpage'
        />
        <div className='absolute inset-0 container  flex flex-col items-center justify-center  '>
          <div className="text-[#24d2deb6]   font-mono mb-9" >
          <AnimatedTextChar text="Embrace the" className="text-7xl "/>
          <AnimatedTextChar text="Future of Blogging" className="text-5xl "/>
          </div>
          <div className='flex flex-col overflow-hidden'>
          <AnimatedTextWord text="Unlock the Power:"/>
          <AnimatedTextWord text=" Explore & Learn with us!"/>
        </div>
        </div>
      </div>
    </>
  );
};

// 'use client'
// import Image from 'next/image';
// import img1 from '../images/img1.jpg';
// import img2 from '../images/img2.jpg';
// import img3 from '../images/img3.jpg';
// import { motion } from 'framer-motion';



// export default function Carousel() {
//   return (
//     <div id='home' className="min-h-screen flex flex-col">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-gray-700 to-black p-8 md:p-16 flex-grow flex flex-col justify-center">
//         <div className="text-center md:text-left">
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold text-white"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Welcome to Our Website
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-white mt-4 md:mt-6"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             Your landing page content goes here.
//           </motion.p>
//         </div>

//         <div className="mt-8 md:mt-12 mx-auto md:mx-0">
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             {/* Image 1 */}
//             <motion.div
//               className="rounded-lg overflow-hidden"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Image
//                 src={img1}
//                 alt="Picture"
//                 width={600}
//                 height={400}
//               />
//             </motion.div>

//             {/* Image 2 */}
//             <motion.div
//               className="rounded-lg overflow-hidden"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Image
//                 src={img2}
//                 alt="Picture"
//                 width={400}
//                 height={300}
//               />
//             </motion.div>

//             {/* Image 3 */}
//             <motion.div
//               className="rounded-lg overflow-hidden"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Image
//                 src={img3}
//                 alt="Picture"
//                 width={400}
//                 height={300}
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Other Sections */}
//       {/* Add more sections or content here as needed */}
//     </div>
//   );
// }


// 'use client'
// import Image from 'next/image';
// import { motion,AnimatePresence } from 'framer-motion';
// import blog1 from '../images/blog1.png';
// import AnimatedTextWord from './AnimatedTextWord';
// import AnimatedTextChar from './AnimatedTextChar';


// export default function Carousel() {
//   return (
// <>
//   <Image
//   src={blog1}
//   className='opacity-90'
//   />
//   <motion.div
//   className='bg-gray-700 w-40 h-40'
//   initial={{ scale: 0 }}
//   animate={{ rotate: 180, scale: 1 }}
//   transition={{
//     type: "spring",
//     stiffness: 500,
//     damping: 100
//   }}
// />

// <div className='container h-screen mx-auto flex flex-col items-center justify-center'>
//   <AnimatedTextWord text="Animated text with framer motion"/>
//   <AnimatedTextChar text="Animated text with framer motion"/>
// </div>
// </>


//   )
// };