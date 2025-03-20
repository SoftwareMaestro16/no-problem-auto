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
                    src="https://www.google.com/maps/embed?pb=!4v1742219580107!6m8!1m7!1sa4EGuiV2hdFLw0s4tK0i0A!2m2!1d25.99633624042059!2d-80.18355975740607!3f186.6314768588716!4f-14.131010366341869!5f0.7820865974627469"                    allowFullScreen=""
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
                        href="https://www.google.com/maps/place/No+Problem+Auto/@25.9958009,-80.1836795,19.25z/data=!4m15!1m8!3m7!1s0x88d9abfe97f6df8d:0xcfa6a4a3f9e38012!2zMzk5OSBQZW1icm9rZSBSZCwgSG9sbHl3b29kLCBGTCAzMzAyMSwg0KHQqNCQ!3b1!8m2!3d25.9957297!4d-80.1833413!16s%2Fg%2F11f3tdt55m!3m5!1s0x88d9ab7d456b2c75:0x88c77d253e07211a!8m2!3d25.9962104!4d-80.1835663!16s%2Fg%2F11l_97zp98?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D "
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