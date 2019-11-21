import React from "react"
import { graphql } from "gatsby"
import Link from 'gatsby-link'

export default ({data}) =>( 
  <div><h1> First sub domain Hello world!</h1>
  <Link to="/about">About </Link>
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