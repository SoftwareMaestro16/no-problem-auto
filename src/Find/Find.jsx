import styles from "./Find.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Find() {
    const { t } = useTranslation();

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.mainText}>{t('find-s')}</h2>
            </div>
        </>
    );
}

export default Find; 