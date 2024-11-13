import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
    >
        
            <div className='  w-screen'>
                <div className=" bgshop">
                    <div className=' flex flex-col w-8/12 mx-auto  cursor-default'>
                        
                        <p className='text-white/10 relative my-32 text-9xl font-extrabold'>
                            <div className=' border-t-4 w-20 border-secondary'></div>
                            <span className=' absolute  text-white top-[26%] text-5xl font-bold'>Về chúng tôi</span>
                            ABOUT
                        </p>
                        
                    </div>
                </div>
            </div>
        
    </motion.div>
    )
}

export default About