import { motion } from "framer-motion";

const variants = {
    open:{
        Transition:{
            staggerChildern:0.1,
        }
    },
    closed:{
        Transition:{
            staggerChildern:0.05,
            staggerDirection: -1,
        }
    }
}

const ItemVariants = {
    open:{
        y:0,
        opacity:1,
    },
    closed:{
        y:50,
        opacity:0,
    }
}

const Links = () => {
    const items = ["Homepage","Services","Portfolio","Contact"];
    return (
        <motion.div className="links" variants={variants}>
            {items.map((item) => (
            <motion.a href={`#${item}`} key={item} variants={ItemVariants} whileHover={{scale:1.3}} whileTap={{scale:0.9}}>
                {item}
            </motion.a>
        ))  }
        </motion.div>
    );
}

export default Links