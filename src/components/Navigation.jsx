"use client"

import { useState } from "react"
import styles from "./Navigation.module.css"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <a href="/" className={styles.logo}>
            {"<Kao />"}
          </a>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <span className={isOpen ? styles.close : ""}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={styles.mobileNav}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
