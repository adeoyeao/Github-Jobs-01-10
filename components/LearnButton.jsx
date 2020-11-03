import { useDispatch } from "react-redux"
import { numPosts } from "../redux/actions"
import styles from "../styles/components/loadmore.module.scss"

const LearnButton = (props) => {
      const dispatch = useDispatch()

      const handleClick = () => {
            dispatch(numPosts())
      }

      return (
            <button
            onClick={handleClick}
            className={styles.loadmore}>Load More</button>
      )
}

export default LearnButton