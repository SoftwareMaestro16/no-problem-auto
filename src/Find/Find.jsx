import styles from "./Find.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";

function Find() {
    const { t } = useTranslation();
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText("3999 Pembroke Rd Hollywood, FL 33021 United States")
            .then(() => {
                setIsCopied(true); 
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            })
            .catch(err => console.error('Ошибка копирования: ', err));
    };

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
                    src="https://www.google.com/maps/embed?pb=!4v1742219131926!6m8!1m7!1sEQg_Djep-TP_JlmOeAV45w!2m2!1d25.99633704884437!2d-80.18366984504577!3f163.05834883288247!4f-12.651784290347734!5f0.7820865974627469"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1 }}
                />

                <div className={styles.addressContainer}>
                    <motion.img
                        src="/location.png"
                        alt="Location Icon"
                        className={styles.icon}
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                    <a
                        href="https://maps.app.goo.gl/8EgsPb7dic9T87zDA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.h2
                            className={styles.address}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8 }}
                        >
                            3999 Pembroke Rd Hollywood, FL 33021
                        </motion.h2>
                    </a>
                    <motion.img
                        src={isCopied ? "/yes.png" : "/copy.png"}
                        alt="Copy Icon"
                        className={styles.icon}
                        onClick={handleCopyClick}
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>
            </div>
        </>
    );
}

export default Find;