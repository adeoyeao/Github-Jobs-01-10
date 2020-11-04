import NavLink from "./NavLink"
import styles from "../styles/components/jobtitle.module.scss"
import { useSelector } from "react-redux"

const JobTitle = (props) => {
      const theme = useSelector(state => state.theme.mode)

      const jobTitleStyle = theme === "dark" ? 
      { backgroundColor: "#19202D" } : 
      { backgroundColor: "white" }

      const headerStyle = theme === "dark" ?
      { color: "white", maxWidth: "100%" } :
      { color: "#19202D", maxWidth: "100%"}

      return (
            <span 
            className={styles.jobtitle}
            style={jobTitleStyle}>
                  <div>
                        <h2 style={headerStyle}>{props.company}</h2>
                        <p>{props.url}</p>
                  </div>
                  <NavLink url={props.url}/>
            </span>
      )
}

export default JobTitle