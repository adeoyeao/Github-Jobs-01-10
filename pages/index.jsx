import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import styles from "../styles/layouts/index.module.scss"
import Form from "../components/Form"
import Header from "../components/Header"
import Spinner from "../components/Spinner"

const Index = () => {
      const [ viewHeight, setViewHeight ] = useState()

      const handleResize = () => {
            setViewHeight(window.innerHeight)
      }

      useEffect(() => {
            setViewHeight(window.innerHeight)
            window.addEventListener("resize", handleResize)
            return window.removeEventListener("resisze", handleResize)
      }, [])

      const indexStyle = {
            height: `${viewHeight}px`
      }

      const theme = useSelector(state => state.theme.mode)
      const loading = useSelector(state => state.jobs.loading)

      theme === "dark" ? 
      indexStyle.backgroundColor = "#121721" :
      indexStyle.backgroundColor = "#F4F6F8"

      return (
            <main className={styles.index} style={indexStyle}>
                  <Header />
                  <Form />
                  {loading && <Spinner />}
            </main>
      )
}

export default Index