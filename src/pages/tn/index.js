import React from "react"
import { graphql } from "gatsby"


export default ({data}) =>( 
  <div><h1> second sub Domain Hello world!</h1>
</div>
)

export const query = graphql`
  query {
    allTutorials {
    edges {
      node {
        id
        createdAt
        title
        topic
      }
    }
  }
  }
`