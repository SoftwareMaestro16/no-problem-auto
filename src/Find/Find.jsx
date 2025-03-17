import styles from "./Find.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Find() {
    const { t } = useTranslation();

    return (
        <>
            <div className={styles.container}>
                <motion.h2
                    className={styles.mainText}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                >
                    {t('find-s')}
                </motion.h2>

                <motion.iframe
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.1552988213866!2d-80.18592158899138!3d25.995729677110585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9abfe97f6df8d%3A0xcfa6a4a3f9e38012!2zMzk5OSBQZW1icm9rZSBSZCwgSG9sbHl3b29kLCBGTCAzMzAyMSwg0KHQqNCQ!5e0!3m2!1sru!2s!4v1742213500671!5m2!1sru!2s"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1 }}
                />
            </div>
        </>
    );
}

export default Find;