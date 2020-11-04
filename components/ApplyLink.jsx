import styles from "../styles/components/applylink.module.scss"

const ApplyLink = (props) => {
      return (
            <a href={props.url}
            className={styles.applylink}
            target="_blank">Apply Now</a>
      )
}

export default ApplyLink