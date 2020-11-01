import { useState, useEffect } from "react"

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

      return (
            <main>
                  {viewHeight}
                  <style jsx>
                        {`
                              main {
                                    height: ${viewHeight}px;
                                    background: blue
                              }
                        `}
                  </style>
            </main>
      )
}

export default Index