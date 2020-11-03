import styles from "../styles/components/card.module.scss"
import { useSelector } from "react-redux"
import Link from "next/link"

const Card = (props) => {
      const mode = useSelector(state => state.theme.mode)

      const cardStyle = mode === "dark" ?
      { background: "#19202D" } :
      { background: "white" }

      const headerStyle = mode === "dark" ?
      { color: "white" } :
      { color: "#19202D"}

      const dateCreated = props.created
      return (
            <Link href={`/jobs/${props.id}`}>
            <div 
            className={styles.card}
            style={cardStyle}>
                  <span>
                        <p>5h ago TBU</p>
                              <div/>
                        <p>{props.type}</p>
                  </span>
                  <h2 style={headerStyle}>{props.title}</h2>
                  <p>{props.company}</p>
                  <h3>{props.location}</h3>
            </div>
            </Link>
      )
}

export default Card