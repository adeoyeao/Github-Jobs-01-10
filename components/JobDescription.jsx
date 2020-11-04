import ApplyLink from "./ApplyLink"
import styles from "../styles/components/jobdescription.module.scss"
import { useSelector } from "react-redux"

const JobDescription = (props) => {
      const theme = useSelector(state => state.theme.mode)

      const jobStyle = theme === "dark" ?
      { background: "#19202D" } :
      { background: "white" }

      const headerStyle = theme === "dark" ?
      { color: "white" } :
      { color: "#19202D"} 
      
      const createMarkup = () => {
            return {__html: `${props.description}`}
      }

      const today = new Date()
      const dateCreated = new Date(props.created)
      const difference = (today - dateCreated) / 3600000

      const time = 
      difference < 24 ?
      `${Math.floor(difference)}h ago` :
      difference / 24 < 7 ?
      `${Math.floor(difference / 24)}d ago` :
      `${Math.floor(difference / 24 /7)}w ago`

      return (
            <section 
            className={styles.jobdescription}
            style={jobStyle}>
                  <article className={styles.details}>
                  <span>
                        <p>{time}</p>
                              <div/>
                        <p>{props.type}</p>
                  </span>
                  <h2 style={headerStyle}>{props.title}</h2>
                  <h3>{props.location}</h3>
                  </article>
                  <ApplyLink url={props.url}/>
                  <article 
                  dangerouslySetInnerHTML={createMarkup()}
                  className={styles.description}/>
            </section>
      )
}

export default JobDescription