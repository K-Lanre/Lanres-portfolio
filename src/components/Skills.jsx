import styles from "./Skills.module.css"

export default function Skills() {
  const skills = [
    { name: "HTML", logo: "/skills/HTML5.png" },
    { name: "CSS", logo: "/skills/CSS3.png" },
    { name: "Bootstrap", logo: "/skills/Bootstrap.png" },
    { name: "Tailwind", logo: "/skills/Tailwind.png" },
    { name: "JavaScript", logo: "/skills/JavaScript.png" },
    { name: "React", logo: "/skills/react.png" },
    { name: "TypeScript", logo: "/skills/Typescript.png" },
    { name: "Next.js", logo: "/skills/nextjs2.webp" },
    { name: "Supabase", logo: "/skills/supabase3.jpeg" },
    { name: "git", logo: "/skills/Git.png" },
    { name: "GitHub", logo: "/skills/github.png" },
    { name: "WordPress", logo: "/skills/WordPress.png" },
    { name: "Figma", logo: "/skills/figma.png" }
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animateFadeInUp}`}>
          <p className={styles.subtitle}>Technical Stack</p>
          <h2 className={styles.title}>Languages & Technologies</h2>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${styles.skillCard} ${styles.animateScaleIn}`}
              style={{ "--delay": `${index * 0.08}s` }}
            >
              {/* <div className={styles.skillLogo}>{skill.logo}</div> */}
              <img src={skill.logo} alt={skill.name} className={styles.skillLogo} />
              <h3 className={styles.skillName}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
