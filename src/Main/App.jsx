import { useEffect } from 'react';
import styles from "./App.module.scss";
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from "react-i18next";
import i18n from '../i18n';
import Header from '../Header/Header';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import { motion } from "framer-motion";

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.backgroundColor = "#121212"; 
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
            src="/bg-logo.png" 
            alt="" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <div className={styles.texts}>
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

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              {t("get-disc")}
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              {t("find")}
            </motion.button>
          </div>
        </div>
      </motion.div>

      <Features />
      <Footer />
    </I18nextProvider>
  );
}

export default App;