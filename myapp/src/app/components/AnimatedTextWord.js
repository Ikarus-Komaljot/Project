
import {motion} from "framer-motion"
export default function AnimatedTextWord({text}){
    const words=text.split(" ");
    // console.log(words)

    //variants

    const container={
        hidden:{opacity:0},
        //using dynamic variance!
        visible:(i=1)=>({
            opacity:1,
            transition:{staggerChildren:0.12,delayChildren:0.04*i},
        }),
    };
    const child={
        visible:{
            opacity:1,
            // y:0,
            x:0,
            transition:{
                type:"spring",
                damping:12,
                stifness:100,
            }
        },
        hidden:{
            opacity:0,
            // y:-20,
            x:20,
            transition:{
                type:"spring",
                damping:12,
                stifness:100,
            }
        }
    }
return(
    <motion.div className="overflow-hidden flex font-semibold text-6xl  md:text-sm" variants={container} initial="hidden" animate="visible">
      {words.map((word,index)=>(
        <motion.span variants={child} className="mr-2 text-4xl text-white " key={index}>{word}</motion.span>
      ))}  
    </motion.div>
)
}