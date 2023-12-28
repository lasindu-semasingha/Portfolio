import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './portfolio.scss'
import { useRef } from 'react';

const items = [
    {
        id: 1,
        title: "Java EE Online Bidding System",
        img: "/heritagehaven.PNG",
        desc: `Implemented client side validations using Java.
        Designed Web pages using CSS.
        Led a team in the successful development of a comprehensive web application using Java.
        Implemented client-side validations using Java, ensuring data integrity, and enhancing user experience.
        Implemented form validations using Java, contributing to a seamless and error-free user interaction.
        Proficiently employed the MVC architecture, enhancing the application's modularity and 
        maintainability.
        Developed backend utilizing Java and MySQL, ensuring efficient data management and system 
        functionality.
        Utilized HTML, JavaScript, and CSS for designing, developing, and maintaining a user-friendly web 
        interface.`
    },
    {
        id: 2,
        title: "PHP Online Customer Support System",
        img: "/genius.PNG",
        desc: `Designed Web pages using CSS.
        Created a visually appealing and responsive frontend using HTML5 and CSS3, prioritizing user 
        experience.
        Implemented backend using PHP and MySQL, ensuring seamless data flow and system functionality.
        Utilized HTML, JavaScript, and CSS for designing, developing, and maintaining a user-friendly web 
        interface.`
    },
    {
        id: 2,
        title: "JavaScript Leads Tracker Chrome Extension",
        img: "/Chrome.png",
        desc: `Implemented JavaScript DOM manipulation.
        Designed interface using CSS.
        Integrated Local Storage to store task data locally on the user's device.
        Ensured a responsive design using JavaScript and CSS, allowing the task manager to adapt seamlessly to various screen sizes and devices.`
    },
];

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref,
        offset: ["start start", "end start"]});

    const y = useTransform(scrollYProgress, [0,1], [0,0]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    );
}



const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:["end end" , "start start"]});
    
    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping: 30,
    })

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
      {items.map( item =>(
        <Single item = {item} key={item.id}/>
      ))}
    </div>
  )
};

export default Portfolio;
