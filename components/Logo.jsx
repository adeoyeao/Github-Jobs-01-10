import styles from "../styles/components/logo.module.scss"
import Link from "next/link"

const Logo = () => {
      return (
            <Link href="/jobs">
            <img 
            src="/assets/desktop/logo.svg" 
            className={styles.logo}/>
            </Link>
      )
}

export default Logo