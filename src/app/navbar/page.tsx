import Link from 'next/link'
import styles from "../home.module.css"
const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navh1}>My-Website</div>
        <div className={styles.anchortag}>
        <Link href="/">Home</Link>
        <Link href="./about">About</Link>
        <Link href="./contact">Contact</Link>
        <Link href="./services">Services</Link>

        </div>
        
      </nav>
    </div>
  )
}

export default Navbar