import { IoLogoGithub } from "react-icons/io"
import styles from "./Footer.module.css"
import { FaEnvelope, FaLinkedin, FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <h3 className={styles.footerTitle}>Portfolio</h3>
            <p className={styles.footerDesc}>Creating beautiful digital experiences with modern technology.</p>
          </div>

          <div>
            <h4 className={styles.footerSubtitle}>Navigation</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerSubtitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerSubtitle}>Follow</h4>
            <div className={styles.socialLinks}>
              <a href="https://github.com/K-Lanre" className={styles.socialLink} title="GitHub">
                <IoLogoGithub />
              </a>
              <a href="https://www.linkedin.com/in/abdul-lateef-kolawole-40348020b/" className={styles.socialLink} title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:kolawolelateef@gmail.com" className={styles.socialLink} title="Email">
                <FaEnvelope />
              </a>
              <a href="https://x.com/webapplanre?s=21" className={styles.socialLink} title="X">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Kolawole Lanre. All rights reserved.</p>
          <div className={styles.footerLegal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
