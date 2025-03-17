import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";
import { useState, useEffect, useRef } from "react";

function Header() {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); 
  const menuRef = useRef(null);
  const burgerMenuRef = useRef(null); 

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !menuRef.current.contains(event.target) && !burgerMenuRef.current.contains(event.target)) {
        setMenuOpen(false); 
      }

      if (isLanguageMenuOpen && !event.target.closest(`.${styles.languageDropdown}`)) {
        setIsLanguageMenuOpen(false); 
      }
    };

    document.addEventListener("click", handleClickOutside);
    
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen, isLanguageMenuOpen]);

  return (
    <header>
      <nav>
        <div className={styles.leftPart}>
          <img src="/no-problem-auto-cropped.png" alt="logo" />
          <a href="#features">
            <h2>Services</h2>
          </a>
          <a href="#about">
            <h2>About Us</h2>
          </a>
          <a href="#promotions">
            <h2>Special Offers</h2>
          </a>
        </div>
        <div 
          className={styles.burgerMenu} 
          ref={burgerMenuRef} 
          onClick={() => {
            console.log('Burger menu clicked, state is:', menuOpen);
            setMenuOpen(!menuOpen); 
          }}
        >
          ☰
        </div>
        <div 
          className={`${styles.rightPart} ${menuOpen ? styles.open : ""}`} 
          ref={menuRef} 
        >
          <div className={styles.languageDropdown}>
            <div 
              className={styles.languageSelector}
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            >
              <img 
                src={i18n.language === 'ru' ? "/flags/rub-flag.jpg" : "/flags/usd-flag.jpg"} 
                alt={i18n.language === 'ru' ? "RU" : "EN"} 
                className={styles.languageIcon}
              />
            </div>

            {isLanguageMenuOpen && (
              <div className={styles.languageMenu}>
                <div onClick={() => changeLanguage('ru')}>
                  <img src="/flags/rub-flag.jpg" alt="RU" className={styles.languageIcon} />
                </div>
                <div onClick={() => changeLanguage('en')}>
                  <img src="/flags/usd-flag.jpg" alt="EN" className={styles.languageIcon} />
                </div>
              </div>
            )}
          </div>

          <a href="tel:+19548736034" className={styles.callLink}>
            <img src="/media/phone.png" alt="Call" className={styles.icon} />
          </a>
          <a 
            href="https://t.me/NoProblemAuto" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.telegramLink}
          >
            <img src="/media/telegram.jpg" alt="Telegram" className={styles.icon} />
          </a>

          <h1 className={styles.number}>+1 954 8736 034</h1>
          
        </div>
      </nav>
    </header>
  );
}

export default Header;