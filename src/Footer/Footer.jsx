import styles from "./Footer.module.scss";
import { motion } from "framer-motion";

function Footer() {
    return (
        <>
            <footer>
                <div className={styles.footerContainer}>
                    <br />
                    
                    <div className={styles.mediaContainer}>
                        <motion.a 
                            href="tel:+19548736034" 
                            whileInView={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            initial={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/media/phone.png" alt="" />
                        </motion.a>

                        <motion.a 
                            href="https://t.me/NoProblemAuto" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            whileInView={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            initial={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/media/telegram.jpg" alt="" />
                        </motion.a>

                        <motion.a 
                            href="https://www.instagram.com/noproblem.auto/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            whileInView={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            initial={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/media/instagram.jpg" alt="" />
                        </motion.a>

                        <motion.a 
                            href="https://www.facebook.com/profile.php?id=61572476408682&sk=photos" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            whileInView={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            initial={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/media/facebook.jpg" alt="" />
                        </motion.a>
                    </div>

                    <br />
                </div>
            </footer>
        </>
    );
}

export default Footer;