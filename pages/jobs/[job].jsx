import { GetStaticPaths, GetStaticProps } from "next"
import { useSelector } from "react-redux"

import Header from "../../components/Header"
import JobTitle from "../../components/JobTitle"
import JobDescription from "../../components/JobDescription"
import styles from "../../styles/layouts/jobs/job.module.scss"

const Job = ({ post }) => {
      const theme = useSelector(state => state.theme.mode)

      const jobStyle = theme === "dark" ? 
      { backgroundColor: "#121721" } : 
      { backgroundColor: "#F4F6F8" }

      return (
            <main 
            className={styles.job}
            style={jobStyle}>
                  <Header />
                  <JobTitle 
                  company={post.company}
                  url={post.company_url}/>
                  <JobDescription 
                  type={post.type}
                  title={post.title}
                  location={post.location}
                  description={post.description}
                  url={post.url}/>
            </main>
      )
}

const getStaticPaths = async () => {
      const res = await fetch("https://jobs.github.com/positions.json")
      const posts = await res.json()

      const paths = posts.map(post => ({
            params: { job: post.id }
      }))

      return { paths, fallback: false }
}

const getStaticProps = async ({ params }) => {
      const res = await fetch(`https://jobs.github.com/positions/${params.job}.json`)
      const post = await res.json()

      return { props: { post }}
}

export { getStaticPaths, getStaticProps }

export default Job