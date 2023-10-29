
import {motion} from "framer-motion"
export default function AnimatedTextChar({text}){
    const letters=Array.from(text)
    // console.log(words)
    const words=text.split(" ")
    //variants

    const container={
        hidden:{opacity:0},
        //using dynamic variance!
        visible:(i=1)=>({
            opacity:1,
            transition:{staggerChildren:0.03,delayChildren:0.04*i},
        }),
    };
    const child={
        visible:{
            opacity:1,
            
            x:0,
            y:0,
            

            transition:{
                type:"spring",
                damping:12,
                stiffness:100,
            }
        },
        hidden:{
            opacity:0,
            
            x:-20,
            y:-20,
            transition:{
                type:"spring",
                damping:12,
                stifness:100,
            }
        }
    }
return(
    <motion.div className="overflow-hidden  flex-wrap  flex font-bold text-5xl " variants={container} initial="hidden" animate="visible">
      {
      words.map((e,index)=>(
        <motion.div key={"wordanimation"+index}>
            {Array.from(e).map((letter,index)=>(
                <motion.span variants={child} className=""  key={"wordanimationspan"+index}>{letter}</motion.span>
            ))}
            {"\u00A0"}
        </motion.div>
      ))
      
      }  
    </motion.div>
)
}