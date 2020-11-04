import styles from "../styles/components/card.module.scss"
import { useSelector } from "react-redux"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { loadingTrue } from "../redux/actions"

const Card = (props) => {
      const mode = useSelector(state => state.theme.mode)
      const dispatch = useDispatch()

      const cardStyle = mode === "dark" ?
      { background: "#19202D" } :
      { background: "white" }

      const headerStyle = mode === "dark" ?
      { color: "white" } :
      { color: "#19202D"}

      const handleClick = () => {
            dispatch(loadingTrue())
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
            <Link href={`/jobs/${props.id}`}>
            <div 
            className={styles.card}
            style={cardStyle}
            onClick={handleClick}>
                  <span>
                        <p>{time}</p>
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