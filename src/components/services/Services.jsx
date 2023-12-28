import { motion, useInView } from 'framer-motion';
import './services.scss'
import { useRef } from 'react';
const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            staggerChildren: 0.1,
        },
    }
}

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref,{margin:"-100px"});

  return (
    <div>
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={"animate"}>
        <motion.div className="textContainer" variants={variants}>
        <p>I focus on front-end and 
            <br />Back-end Development</p>
        <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src='/developer.jpg' alt=""/>
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business</h1>
                <button>WHAT I DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>
                <h2>Front-End Development</h2>
                <p>
                Transform your online presence with my 
                expert frontend development skills. I 
                create sleek, user-friendly interfaces 
                that elevate your website's aesthetics 
                and functionality. Let's bring your digital 
                vision to life, one pixel at a time.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>
                <h2>Back-End Development</h2>
                <p>
                I specialize in creating efficient and 
                secure server-side solutions for web 
                applications. With expertise in database 
                management, server architecture, and API 
                integrations, I ensure optimal performance 
                and scalability. Whether building from 
                scratch or enhancing existing systems, 
                I deliver tailored solutions to meet your 
                specific needs.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
    </div>
  )
};

export default Services;
