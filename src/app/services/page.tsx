import React from 'react'
import Link from 'next/link'
import styles from "../home.module.css"
const Services = () => {
  return (
    <div>
      <div className={styles.servicesbg}>
        <h1 className={styles.servicestexth1} >This is Services Page</h1>
        <p className={styles.servicestextp}><Link href="/">Go To Home Page</Link></p>
      </div>
    </div>
  )
}

export default Services