import styles from "../styles/components/spinner.module.scss"
import { useState, useEffect } from "react"

const Spinner = () => {
      const [ innerheight, setInnerheight] = useState()

      const handleResize = () => setInnerheight(window.innerHeight)

      useEffect(() => {
           handleResize()
            window.addEventListener("resize", handleResize)
            return window.removeEventListener("resize", handleResize)
      }, [])

      const spinnerStyle = {
            height: `${innerheight}px`
      }
 
      return (
            <section 
            className={styles.spinner}
            style={spinnerStyle}>
                  <div/>
                  <div/>
                  <div/>
                  <div/>
            </section>
      )
}

export default Spinner