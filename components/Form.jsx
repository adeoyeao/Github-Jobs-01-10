import { useState } from "react"
import { useRouter } from "next/router"
import Input from "./Input"
import Icon from "./Icon"
import styles from "../styles/components/form.module.scss"
import AuthButton from "./AuthButton"

const Form = () => {
      const [ mode, setMode ] = useState("login")
      const [ input, setInput ] = useState({
            username: "",
            password: ""
      })

      const [ method, setMethod ] = useState()
      const [ action, setAction ] = useState()
      const [ heading, setHeading ] = useState("Welcome to DevJobs")

      const router = useRouter()

      const handleClick = (e) => {
            e.preventDefault()
            mode === "login" ? setMode("register") : setMode("login")
      }

      const handleChange = (e) => {
            const { name, value } = e.target
            setInput(prev => ({
                  ...prev,
                  [name]: value
            }))
      }

      const handleAuthorisation = (e) => {
            const name = e.target.name
            name === "github" ?
            (setMethod("GET"), setAction("/auth/github")) :
            (
                  e.preventDefault(),
                  fetch(`/${name}`, {
                        method: "POST",
                        headers: {
                              "content-type": "application/json"
                        },
                        body: JSON.stringify({
                              username: input.username,
                              password: input.password
                        })
                  })
                  .then(res => res.json())
                  .then(data => setHeading(data.message))
                  .then(() => setTimeout(() => router.push("/jobs"), 1500))
                  .catch(() => setHeading(`${name} Failed`))
            )
      }

      return (
            <form 
            className={styles.form}
            method={method}
            action={action}>
                  <h1>{heading}</h1>
                  <div className={styles.inputs}>
                        <Icon url="./assets/shared/address.svg"/>
                        <Input 
                        name="username" 
                        value={input.email}
                        handleChange={handleChange}
                        type="text"/>
                  </div>
                  <div className={styles.inputs}>
                        <Icon url="./assets/shared/lock.svg"/>
                        <Input 
                        name="password" 
                        value={input.password}
                        handleChange={handleChange}
                        type="password"/>
                  </div>
                  { mode === "login" ? 
                  <p>Don't have an account? <span onClick={handleClick}>Sign up</span></p> :
                  <div className={styles.line}></div> }
                  { mode === "login" ? 
                  <div className={styles.buttons}>
                        <AuthButton 
                        handleClick={handleAuthorisation}
                        text="Login"
                        name="login"/>
                        <AuthButton 
                        handleClick={handleAuthorisation}
                        text="Sign in with Github"
                        name="github"/>
                  </div> :
                  <div className={styles.buttons}>
                        <AuthButton 
                        handleClick={handleAuthorisation}
                        text="Register"
                        name="register"/>
                        <AuthButton 
                        handleClick={handleClick}
                        text="Return to Login"
                        name="back"/>
                  </div> }
            </form>
      )
}

export default Form