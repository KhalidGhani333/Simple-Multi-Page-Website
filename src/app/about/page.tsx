import Link from 'next/link'
import React from 'react'
import styles from "../home.module.css"

const About = () => {
  return (
    <div>
      <div className={styles.aboutbg}>
        <h1 className={styles.abouttexth1}>This is About Page</h1>
        <p className={styles.abouttextp}><Link href="/">Go to Home Page</Link></p>
      </div>
    </div>
  )
}

export default About
