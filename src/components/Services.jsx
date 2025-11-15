import styles from "./Services.module.css"

export default function Services() {

  const services = [
    {
      icon: "📱",
      title: "Responsive Web Design",
      desc: "Pixel-perfect, mobile-first responsive layouts using Tailwind CSS and modern patterns."
    },
    {
      icon: "🧩",
      title: "Component-based UI",
      desc: "Reusable React components, clean separation of concerns, accessible markup."
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      desc: "Lazy-loading, code-splitting, and bundle size monitoring."
    },
    {
      icon: "🔗",
      title: "API Integration",
      desc: "Fetch, cache, and manage remote data with good UX and error handling."
    },
    {
      icon: "🎨",
      title: "UI/UX Implementation",
      desc: "Translate Figma designs into interactive UIs with attention to details."
    },
    {
      icon: "🚀",
      title: "Search Visibility",
      desc: "Create websites that load fast, use clean code, and are optimized for top Google rankings."
    }
  ];


  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animateFadeInUp}`}>
          <p className={styles.subtitle}>What I Do</p>
          <h2 className={styles.title}>Services & Expertise</h2>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard} ${styles.animateFadeInUp}`}
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <div className={styles.iconBox}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
