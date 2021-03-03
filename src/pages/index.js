import * as React from "react"
import { Link } from 'gatsby'

// Link enable pre-fetching and other perf imporements over standard <a> tags

// markup
const IndexPage = () => {
  return (
    <main >
      <title>Home Page</title>
      <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            </nav>
      <h1 >
        Congratulations
        <br />
        <span >— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p>Hello my name is Andy</p>
    </main>
  )
}

export default IndexPage
