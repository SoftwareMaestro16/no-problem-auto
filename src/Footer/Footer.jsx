import styles from "./Footer.module.scss"

function Footer() {

    return (
        <>
            <footer>
                <div className={styles.footerContainer}>
                    <br />
                    
                    <div className={styles.mediaContainer}>
                        <a href="tel:+19548736034">
                            <img src="/media/phone.png" alt="" />
                        </a>
                        <a href="https://t.me/NoProblemAuto" target="_blank" rel="noopener noreferrer">
                            <img src="/media/telegram.jpg" alt="" />
                        </a>
                        <a href="https://www.instagram.com/noproblem.auto/" target="_blank" rel="noopener noreferrer">
                            <img src="/media/instagram.jpg" alt="" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61572476408682&sk=photos" target="_blank" rel="noopener noreferrer">
                            <img src="/media/facebook.jpg" alt="" />
                        </a>
                    </div>

                    <br />
                </div>
            </footer>
        </>
    )
}

export default Footer;