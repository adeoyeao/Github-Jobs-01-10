import styles from "../styles/components/input.module.scss"

const Input = (props) => {
      return (
            <input
            className={styles.input} 
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.name}
            autoComplete="off"
            onChange={(e) => props.handleChange(e)}/>
      )
}

export default Input