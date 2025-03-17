import { useEffect } from 'react';
import styles from "./App.module.scss";
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from "react-i18next";
import i18n from '../i18n';
import { motion } from "framer-motion";
import Header from '../Header/Header';
import Features from '../Features/Features';
import About from '../About/About';
import Promotions from '../Promotions/Promotions';
import Find from '../Find/Find';
import Footer from '../Footer/Footer';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.backgroundColor = "#06031E"; 
    return () => {
      document.body.style.backgroundColor = ""; 
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      
      <motion.div 
        className={styles.main} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      > 
        <div>
          <motion.img 
            src="/logo-nobg.png" 
            alt="No Problem Auto" 
            initial={{ opacity: 0.05, scale: 0.9 }}
            animate={{ opacity: 0.55, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <div className={styles.texts}>
            <h2 className={styles.name}>No Problem Auto</h2>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t("first")}
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("slogan")}
            </motion.h2>

            
            <motion.a 
            href="#find" 
            style={{ textDecoration: "none" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              {t("find")}
            </motion.button>
          </motion.a>
          </div>
        </div>
      </motion.div>

      <div id="features">
        <Features />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="promotions">
        <Promotions />
      </div>
      <div id="find">
        <Find />
      </div>
      <Footer />
    </I18nextProvider>
  );
}

export default App;