import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
    animationOne:{
        x: [-20, 20],
        y: [0, -30],
        transition:{
            x:{
                repeat: Infinity,
                duration: 0.9
            },
            y:{
                duration: 0.45,
                ease: "easeOut",
                repeat: Infinity,
            },
        }
    },
    animationTwo: {
      y: [0, -40],
      x: 0,
      transition:{
        y:{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
        },
      }
    }
}

const Loader = () => {
  const [animation, animationCycle] = useCycle('animationOne', 'animationTwo')
  return (
    <>
      <motion.div className='loader' variants={loaderVariants} animate={animation}>
    
      </motion.div>
      <div onClick={() => animationCycle}>Change Loader</div>
    </>
  )
}

export default Loader;
