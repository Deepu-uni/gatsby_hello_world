import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import DrupalComments from "gatsby-plugin-drupal-comments"


export default class ContactPage extends React.Component{
   state = {
    firstName: "",
    lastName: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }
	render() {

		return   ( 
      <div style={{ color: `teal` }}>
     
    <Link to="/">Home</Link>
      <DrupalComments crossorigin entity_id = "drupal id node"
         type_comment = "commentType"
         field_name = "fieldName"
         type_content = "body" 
         entity_type = "entityTypeId"
         url_api = "http://localhost/contenta/web/api/comments"
         login_api = "admin"
         password_api = "drupal"/>
    <Header headerText="Contact" />

    <p>Send us a message!</p>
     <form action="http://localhost/contenta/web/api/comments"  method="post">
        <label>
          First name
          <input type="text" name="firstName" value={this.state.firstName}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Last name
          <input type="text" name="lastName" value={this.state.lastName}
            onChange={this.handleInputChange}/>
        </label>
         <label>
          Message
         <textarea name="message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
  </div>)
	}
}

