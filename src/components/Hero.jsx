import { FaEnvelope, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import styles from "./Hero.module.css"
import { IoLogoGithub } from "react-icons/io"

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <div className={`${styles.intro} ${styles.animateFadeInUp}`}>
              <p className={styles.subtitle}>Welcome to my portfolio</p>
              <h1 className={styles.title}>
                Hi, I'm <span className={styles.accent}>Kolawole Lanre</span>
              </h1>
              <p className={styles.role}>Frontend Developer</p>
            </div>

            <p className={`${styles.description} ${styles.animateFadeInUp}`}>
              I’m a frontend developer passionate about crafting clean, responsive, and accessible web experiences.
              I specialize in building modern, component-driven interfaces using React, Tailwind CSS, and best design practices.
              My focus is on creating performant, maintainable, and visually appealing applications that deliver real value to users.
            </p>

            <div className={`${styles.buttonGroup} ${styles.animateFadeInUp}`}>
              <button
                className={styles.primaryBtn}
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <span className={styles.arrow}>→</span>
              </button>
              <button
                className={styles.secondaryBtn}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </button>
            </div>

            <div className={`${styles.socialLinks} ${styles.animateFadeInUp}`}>
              <a href="https://x.com/webapplanre?s=21" className={styles.socialLink} title="X">
                <FaXTwitter />
              </a>
              <a href="https://github.com/K-Lanre" className={styles.socialLink} title="GitHub">
                <IoLogoGithub />
              </a>
              <a href="https://www.linkedin.com/in/abdul-lateef-kolawole-40348020b/" className={styles.socialLink} title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:kolawolelateef@gmail.com" className={styles.socialLink} title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className={`${styles.imageContainer} ${styles.animateSlideInRight}`}>
            <div className={styles.imageBg}></div>
            <img src="/Lanre2.png" alt="Professional portrait" className={styles.profileImage} />
          </div>
        </div>
      </div>
    </section>
  )
}
