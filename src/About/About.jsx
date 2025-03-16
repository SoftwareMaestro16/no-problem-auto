import styles from "./About.module.scss";
import { useTranslation } from "react-i18next";
import "../index.scss";

function About() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <img src="/bg-image.png" alt="" />
            <div className={styles.mainTexts}>
                <h1>{t('about')}</h1>
                <h2>{t('about-desc')}</h2>
            </div>
            <div className={styles.fullDesc}>
                <div className={styles.first}>
                    <h2 dangerouslySetInnerHTML={{ __html: t('full-desc-1') }} />
                    <h2>{t('full-desc-2')}</h2>
                    <h2>{t('full-desc-3')}</h2>
                </div>
                <div className={styles.second}>
                    <h2 className={styles.why}>{t('why-choose')}</h2>
                    <h2 className={styles.desc} dangerouslySetInnerHTML={{ __html: t('param-1') }} />
                    <h2>{t('param-1-desc')}</h2>
                    <h2 className={styles.desc} dangerouslySetInnerHTML={{ __html: t('param-2') }} />
                    <h2>{t('param-2-desc')}</h2>
                    <h2 className={styles.desc} dangerouslySetInnerHTML={{ __html: t('param-3') }} />
                    <h2>{t('param-3-desc')}</h2>
                    <h2 className={styles.desc} dangerouslySetInnerHTML={{ __html: t('param-4') }} />
                    <h2>{t('param-4-desc')}</h2>
                </div>
                <div className={styles.third}>
                    <h2 dangerouslySetInnerHTML={{ __html: t('about-end') }} />
                    <h2 className={styles.endDesc}>{t('about-end-desc')}</h2>
                </div>
            </div>
            
            
        </div>
    );
}

export default About;