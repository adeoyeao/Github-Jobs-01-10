import styles from "../styles/components/search.module.scss"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { jobsRequest, jobsSuccess, jobsFailure } from "../redux/actions"

const Search = () => {
      const dispatch = useDispatch()
      const theme = useSelector(state => state.theme.mode)

      const [ input, setInput ] = useState({
            title: "",
            location: "",
            fullTime: false
      })

      const handleChange = (e) => {
            const { name, value } = e.target
            setInput(prev => ({
                  ...prev,
                  [name]: value
            }))
      }

      const handleClick = () => {
            setInput(prev => ({
                  ...prev,
                  fullTime: !prev.fullTime
            }))
            console.log(input.fullTime)
      }

      const handleSubmit = (e) => {
            e.preventDefault()
            
            dispatch(jobsRequest())

            const url = "/search"

            fetch(url, {
                  method: "POST",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify({
                        description: input.title,
                        location: input.location,
                        fullTime: input.fullTime
                  })
            })
            .then(res => res.json())
            .then(data => dispatch(jobsSuccess(data)))
            .catch(error => { 
                  dispatch(jobsFailure(error.message))
                  console.error("Not working") })

            setInput(prev => ({
                  ...prev,
                  title: "",
                  location: ""
            }))
      }

      const searchStyle = theme === "dark" ?
      { background: "#19202D" } :
      { background: "white" }

      const fullTimeStyle = input.fullTime ? {background: "grey"} : {background: "none"}

      return (
            <form className={styles.search}
            onSubmit={handleSubmit}>
                  <input 
                  name="title"
                  onChange={handleChange}
                  value={input.title}
                  placeholder="Filter by title..."
                  autoComplete="off"
                  style={searchStyle}/>
                  <input 
                  name="location"
                  onChange={handleChange}
                  value={input.location}
                  placeholder="Filter by location..."
                  autoComplete="off"
                  style={searchStyle}/>
                  <span style={searchStyle}>
                        <div 
                        onClick={handleClick}
                        style={fullTimeStyle}/>
                        <p>Full Time Only</p> 
                        <button>Search</button>
                  </span>
            </form>
      )
}

export default Search