import styles from "./Features.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Features() {
    const { t } = useTranslation();

    const features = [
        {
            title: t("title-1"),
            description: t("desc-1"),
            img: "/features/service.png", 
        },
        {
            title: t("title-2"),
            description: t("desc-2"),
            img: "/features/langs.png",
        },
        {
            title: t("title-3"),
            description: t("desc-3"),
            img: "/features/price.png",
        },
        {
            title: t("title-4"),
            description: t("desc-4"),
            img: "/features/lounge.png",
        },
    ];

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.featuresMainContainer}>
                {/* Анимация заголовка */}
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {t("why")}
                </motion.h1>

                <div className={styles.featuresContainer}>
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.featureCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className={styles.desc}>
                                <img src={feature.img} alt={feature.title} className={styles.featureIcon} />
                                <h3>{feature.title}</h3>
                            </div>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;