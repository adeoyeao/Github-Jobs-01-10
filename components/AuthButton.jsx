import styles from "../styles/components/authbutton.module.scss"

const AuthButton = (props) => {
      return (
            <button 
            onClick={(e) => (props.handleClick(e))}
            className={styles.authbutton}
            name={props.name}>
                  {props.text}
            </button>
      )
}

export default AuthButton