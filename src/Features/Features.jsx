import styles from "./Features.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Features() {
    const { t } = useTranslation();

    const features = [
        {
            title: t("title-1"),
            img: "/features/engine.jpeg", 
        },
        {
            title: t("title-2"),
            img: "/features/oil.jpeg",
        },
        {
            title: t("title-3"),
            img: "/features/brake.jpeg",
        },
        {
            title: t("title-4"),
            img: "/features/battery.jpeg",
        },
        {
            title: t("title-5"),
            img: "/features/tire.jpeg",
        },
        {
            title: t("title-5"),
            img: "/features/diagnostics.jpeg",
        },
    ];

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.featuresMainContainer}>
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
                            transition={{ duration: 0.15, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className={styles.desc}>
                                <img src={feature.img} alt={feature.title} className={styles.featureIcon} />
                                <h3>{feature.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;