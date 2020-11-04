import styles from "../styles/components/logo.module.scss"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { loadingTrue } from "../redux/actions"
import { useRouter } from "next/router" 

const Logo = () => {
      const dispatch = useDispatch()
      const router = useRouter()

      const handleClick = () => {
            router.query.job && dispatch(loadingTrue())
      }

      return (
            <Link href="/jobs">
            <img 
            src="/assets/desktop/logo.svg" 
            className={styles.logo}
            onClick={handleClick}/>
            </Link>
      )
}

export default Logo