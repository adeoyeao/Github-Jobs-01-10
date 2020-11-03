import styles from "../styles/components/header.module.scss"
import Switch from "./Switch"
import Logo from "./Logo"

const Header = () => {
      return (
            <header className={styles.header}>
                  <Logo />
                  <Switch />
            </header>
      )
}

export default Header