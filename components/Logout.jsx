import styles from "../styles/components/logout.module.scss"
import { useRouter } from "next/router"

const Logout = () => {
      const router = useRouter()

      const handleClick = () => {
            fetch("/logout")
            .then(() => router.push("/"))
            // .then(() => "Successfully logged out")
            // .catch(err => console.error(err))
      }

      return (
            <footer className={styles.logout}>
                  <button onClick={handleClick}>Logout</button>
            </footer>
      )
}

export default Logout