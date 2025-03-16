import styles from "./About.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "../index.scss";

function About() {
    const { t } = useTranslation();

    return (
        <motion.div 
            className={styles.container}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} 
        >
            <img src="/bg-image.png" alt="" />
            <div className={styles.mainTexts}>
                <motion.h1 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {t('about')}
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {t('about-desc')}
                </motion.h2>
            </div>
            
            <div className={styles.fullDesc}>
                <div className={styles.first}>
                    <motion.h2 
                        dangerouslySetInnerHTML={{ __html: t('full-desc-1') }} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {t('full-desc-2')}
                    </motion.h2>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {t('full-desc-3')}
                    </motion.h2>
                </div>

                <div className={styles.second}>
                    <motion.h2 
                        className={styles.why} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {t('why-choose')}
                    </motion.h2>

                    {[1, 2, 3, 4].map((num, index) => (
                        <motion.div key={num}>
                            <motion.h2 
                                className={styles.desc} 
                                dangerouslySetInnerHTML={{ __html: t(`param-${num}`) }}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            />
                            <motion.h2
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                                viewport={{ once: true }}
                            >
                                {t(`param-${num}-desc`)}
                            </motion.h2>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.third}>
                    <motion.h2 
                        dangerouslySetInnerHTML={{ __html: t('about-end') }} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    />
                    <motion.h2 
                        className={styles.endDesc} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {t('about-end-desc')}
                    </motion.h2>
                </div>
            </div>
        </motion.div>
    );
}

export default About;