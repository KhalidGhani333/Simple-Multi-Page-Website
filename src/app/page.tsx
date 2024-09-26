import React from 'react'
import Navbar from './navbar/page'
import styles from "./home.module.css"
const page = () => {
  return (
    <div>
    <Navbar/>
      <div className={styles.homebg}>
        <h1 className={styles.hometexth1}>Welcome to My Website</h1>
        <p className={styles.hometextp}>This is Home Page</p>

      </div>

    </div>
  )
}

export default page