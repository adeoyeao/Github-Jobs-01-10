import { useSelector } from "react-redux"
import { GetStaticProps } from "next"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { jobsRequest, jobsSuccess, jobsFailure } from "../../redux/actions"

import Header from "../../components/Header"
import styles from "../../styles/layouts/jobs/index.module.scss"
import LearnButton from "../../components/LearnButton"
import Card from "../../components/Card"
import Search from "../../components/Search"

const Index = ({ posts }) => {
      const dispatch = useDispatch()

      useEffect(() => {
            dispatch(jobsSuccess(posts))
      }, [])

      const theme = useSelector(state => state.theme.mode)
      const items = useSelector(state => state.posts.items)
      const loading = useSelector(state => state.jobs.loading)
      const jobs = useSelector(state => state.jobs.data)

      const indexStyle = theme === "dark" ? 
      { backgroundColor: "#121721" } : 
      { backgroundColor: "#F4F6F8" }

      return (
            <main 
            style={indexStyle}
            className={styles.index}>
            <Header />
            <Search />
            <section>
                { jobs.map((job, idx) => 
                      idx < items && 
                      <Card 
                      created={job.created_at}
                      type={job.type}
                      title={job.title}
                      company={job.company}
                      location={job.location}
                      id={job.id}
                      key={job.id}/>
                ) }
            </section>
            <LearnButton />
            </main>
      )
}

const getStaticProps = async () => {
      const res = await fetch("https://jobs.github.com/positions.json")
      const posts = await res.json()

      return {
            props: {
                  posts
            },
      }
}

export { getStaticProps }
export default Index