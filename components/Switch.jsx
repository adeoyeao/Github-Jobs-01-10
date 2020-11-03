import styles from "../styles/components/switch.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { darkMode, lightMode } from "../redux/actions"

const Switch = (props) => {
      const theme = useSelector(state => state.theme.mode)
      const dispatch = useDispatch()

      const handleClick = () => {
            theme === "dark" ? dispatch(lightMode()) : dispatch(darkMode())
      }

      return (
            <span className={styles.switch}>
                  <img src="/assets/desktop/icon-sun.svg" />
                  <div>
                        <button 
                        onClick={handleClick}
                        className={styles[theme]}/>
                  </div>
                   <img src="/assets/desktop/icon-moon.svg" />            
            </span>
      )
}

export default Switch