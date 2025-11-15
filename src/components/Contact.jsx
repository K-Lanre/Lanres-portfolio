import { useState } from "react"
import styles from "./Contact.module.css"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState({ type: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: "", message: "" })

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.send(
        'service_chxhkw5',      // Replace with your service ID
        'template_gikcf1a',     // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'KiJmsRa3UNcv_Hmn4'       // Replace with your public key
      )

      if (result.text === 'OK') {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon."
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>Get In Touch</p>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.description}>
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>✉️</div>
            <h3>Email</h3>
            <a href="mailto:kolawolelateef@gmail.com">kolawolelateef@gmail.com</a>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📞</div>
            <h3>Phone</h3>
            <a href="tel:+2348149792454">+234 81 4979 2454</a>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📍</div>
            <h3>Location</h3>
            <p>Abuja, Nigeria</p>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          {status.message && (
            <div className={`${styles.statusMessage} ${styles[status.type]}`}>
              {status.message}
            </div>
          )}

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project inquiry"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}
