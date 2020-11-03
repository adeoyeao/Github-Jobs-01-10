import styles from "../styles/components/icon.module.scss"

const Icon = (props) => {
      return (
            <img src={props.url} className={styles.icon}/>
      )
}

export default Icon