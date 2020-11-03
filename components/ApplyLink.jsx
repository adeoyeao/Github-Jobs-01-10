import styles from "../styles/components/applylink.module.scss"

const ApplyLink = (props) => {
      return (
            <a href={props.url}
            className={styles.applylink}>Apply Now</a>
      )
}

export default ApplyLink