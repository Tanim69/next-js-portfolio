// import { motion } from "framer-motion"

// // variants
// const stairAnimation = {
//     initial: {
//         top: '0%',

//     },
//     animate: {
//         top:'100%'
//     },
//     exit:["100%","0%"],
// }

// // calculate the reverse index for staggred delay  
// const reverseIndex = (index)=>{
//     const totalSteps=6;// number of steps
//     return totalSteps - index -1;

// }
// const Stairs = () => {
//     return (
//         <div>
//             {/* render 6 motion div ,each if representing a step ot the stairs
//             each div will have the same animation defined by the stairs animation object. 
//             the delay for each div is caalculated sinamically based on its reversed index,
//             creating a staggered effectd with decreasing delay for each subsequent setep.  */}

//             {[...Array(6)].map((_,index)=>{
//                 <motion.div key={index} variants={stairAnimation} initial="initial"animate="animate" exit="exit" transition={{
//                     duration:0.4,
//                     ease:'easeInOut',
//                     delay: reverseIndex(index)*0.
//                 }}
//                 className="h-full w-full bg-white relative"/> 
//             })}
//         </div>
//     )
// }

// export default Stairs