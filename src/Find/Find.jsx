import styles from "./Find.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Find() {
    const { t } = useTranslation();

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.mainText}>{t('find-s')}</h2>
                <iframe  className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.1552988213866!2d-80.18592158899138!3d25.995729677110585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9abfe97f6df8d%3A0xcfa6a4a3f9e38012!2zMzk5OSBQZW1icm9rZSBSZCwgSG9sbHl3b29kLCBGTCAzMzAyMSwg0KHQqNCQ!5e0!3m2!1sru!2s!4v1742213500671!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
}

export default Find; 