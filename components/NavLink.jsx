import styles from "../styles/components/navlink.module.scss"
import { useSelector } from "react-redux"

const NavLink = (props) => {
      const theme = useSelector(state => state.theme.mode)

      const navLinkStyle = theme === "dark" ? 
      { backgroundColor: "#303742", color: "white"  } : 
      { backgroundColor: "#EEEFFC", color: "#5964E0" }

      return (
            <a
            href={props.url}
            target="_blank"
            className={styles.navlink}
            style={navLinkStyle}>
                  Company Website
            </a>
      )
}

export default NavLink