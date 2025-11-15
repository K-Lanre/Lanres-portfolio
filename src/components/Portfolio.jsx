import styles from "./Portfolio.module.css"

export default function Portfolio() {
  const projects = [
    {
      title: "Bank App",
      category: "Web App",
      description: "A banking web app with real-time inventory management and payment integration.",
      image: "/portfolio/bankist.png",
      tags: ["React"],
      links: { live: "https://bankist-2lgf.vercel.app/", github: "https://github.com/K-Lanre/Bankist" },
    },
    {
      title: "Wild Oasis",
      category: "Web App",
      description: "A web app for booking and managing hotel bookings.",
      image: "/portfolio/wildoasis.png",
      tags: ["React", "Supabase"],
      links: { live: "https://the-wild-oasis-six-lac.vercel.app/", github: "https://github.com/K-Lanre/Wild-Oasis" },
    },
    {
      title: "Wild Oasis Website",
      category: "Web App",
      description: "The client-side of the Wild Oasis website.",
      image: "/portfolio/wildOasiswebsite.png",
      tags: ["next.js", "supabase", "tailwindcss"],
      links: { live: "https://the-wild-oasis-website-kohl-seven.vercel.app/", github: "https://github.com/K-Lanre/the-wild-Oasis-website" },
    },
    {
      title: "FydHue",
      category: "Website",
      description: "A web site aimed at bringing creators together.",
      image: "/portfolio/fydhue.png",
      tags: ["html", "css", "js", "bootstrap"],
      links: { live: "https://fyndhue-world.vercel.app/index.html", github: "https://github.com/K-Lanre/fyndhue" },
    },
    {
      title: "Finance Logger",
      category: "Website",
      description: "A web app for logging and managing financial transactions.",
      image: "/portfolio/financelogger.png",
      tags: ["html", "css", "js", "typescript"],
      links: { live: "https://finance-logger-typescript-sigma.vercel.app/", github: "https://github.com/K-Lanre/finance-logger-typescript" },
    },

  ]

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animateFadeInUp}`}>
          <p className={styles.subtitle}>Featured Work</p>
          <h2 className={styles.title}>My Portfolio</h2>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} ${styles.animateFadeInUp}`}
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <div className={styles.projectImage}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className={styles.overlay}>
                  <a href={project.links.live} className={styles.iconLink} title="View live">
                    🔗
                  </a>
                  <a href={project.links.github} className={styles.iconLink} title="View source">
                    💻
                  </a>
                </div>
              </div>

              <div className={styles.projectContent}>
                <p className={styles.category}>{project.category}</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
