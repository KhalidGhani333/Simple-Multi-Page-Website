import Link from 'next/link'
import React from 'react'
import styles from "../home.module.css"
const Contact = () => {
  return (
    <div>
      <div className={styles.contactbg}>
      <h1 className={styles.contacttexth1}> This is Contact Page </h1>
      <p className={styles.contacttextp}><Link href="/">Go To Home Page</Link></p>

      </div>
    </div>
  )
}

export default Contact