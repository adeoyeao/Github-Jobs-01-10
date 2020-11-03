import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import styles from "../styles/layouts/index.module.scss"
import Form from "../components/Form"
import Header from "../components/Header"

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

      theme === "dark" ? 
      indexStyle.backgroundColor = "#121721" :
      indexStyle.backgroundColor = "#F4F6F8"

      return (
            <main className={styles.index} style={indexStyle}>
                  <Header />
                  <Form />
            </main>
      )
}

export default Index