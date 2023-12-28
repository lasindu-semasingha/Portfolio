import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return <> 
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}}>Lasindu Semasingha</motion.span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="https://instagram.com/lasindu_ds_?igshid=MmVlMjlkMTBhMg%3D%3D&utm_source=qr"><img src="/instagram.png" alt="" /></a>
                <a href="https://github.com/it22198518/"><img src="/github.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/lasindu-dileepa-05bb21266/"><img src="/linkedin.png" alt="" /></a>
            </div>
        </div>
    </div>
    </>
}

export default Navbar