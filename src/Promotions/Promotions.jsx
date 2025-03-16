import styles from "./Promotions.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../index.scss";

function Promotions() {
    const { t } = useTranslation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div 
            ref={ref}
            className={styles.main}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            <h2 className={styles.mainText}>{t('prom')}</h2>

            <motion.img 
                className={styles.engine1} 
                src="/engine1.png" 
                alt="" 
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 0.5, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
            />
            
            <motion.img 
                className={styles.engine2} 
                src="/engine2.png" 
                alt="" 
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 0.5, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.div 
                className={styles.desc}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <h2 dangerouslySetInnerHTML={{ __html: t('prom-desc-1') }}></h2>
                <h2>{t('prom-desc-2')}</h2>
            </motion.div>

            <motion.div 
                className={styles.blocks}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <div className={styles.leftBlock}>
                    <h2>{t('left-h2')}</h2>
                    <h3 dangerouslySetInnerHTML={{ __html: t('left-h3') }}></h3>
                </div>
                <div className={styles.rightBlock}>
                    <h2>{t('right-h2')}</h2>
                    <h3 dangerouslySetInnerHTML={{ __html: t('right-h3') }}></h3>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Promotions;