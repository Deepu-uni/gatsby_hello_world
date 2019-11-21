import React from "react"
import { graphql } from "gatsby"
import Link from 'gatsby-link'
import Header from "../../components/header"


const  IndexPage = ({ data }) =>
{
  const Recipies = data.allRecipes.nodes.map((recipe) => {
    return (<div>
    <h2><a href={recipe.path}>{recipe.title}</a></h2>
    <p>Cooking Time: {recipe.cookingTime}</p>
    <p>Number Of Servings: {recipe.numberOfservings}</p>
    <img src={recipe.relationships.image.imageFile.imageDerivatives.links.recipe_list_350_300.href} alt="" />
    <p>Ingredients : </p>
    <p>{recipe.ingredients} </p>
    <p>Tags : {recipe.relationships.tags.map((tag) => <a>{tag.name} , </a>)}</p>
    <p>Recipe By : {recipe.relationships.owner.name}</p>
    </div>);
  }
    )
return ( 
  <div><h1> First sub domain Hello world!</h1>
      <PrimaryButton>Click me</PrimaryButton>
  <Link to="/en/about">About </Link>
  <Link to="../contact/">Contact</Link>
  <Header headerText="Top Recipies!" />
  {Recipies}
    
</div>
)
}
export default IndexPage

function PrimaryButton(){

 return (<button className="primary-button">Click me</button>)
 }

export const query = graphql`
  query {
    allRecipes(limit: 3) {
    nodes {
      cookingTime
      ingredients
      numberOfservings
      path
      relationships {
        image {
          imageFile {
            imageDerivatives {
              links {
                recipe_list_350_300 {
                  href
                }
              }
            }
          }
        }
        tags {
          name
        }
        owner {
          name
        }
      }
      title
    }
  }
  }
`