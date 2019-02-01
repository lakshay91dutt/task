/*
    Candidate
            Registration 
*/

import React, { Component } from 'react';
import './vendors/css/normalize.css'
import './css/style.css';
import './css/queries.css';
import './vendors/css/grid.css'

//React module - To use predefined form elements
import AllELements from './customComponents/formElements'

//Node module - to write Form data into local JSON file
//import {ProcessRecords} from './dataFiles/dataFileOperations - (Node)'
class App extends Component { 
    constructor (props){
        super (props);
        this.state = {
            empId: '',
            firstName: '',
            lastName: '',
            emailId: '',
            mobile: '',
            dob: '',
            address: '',
            designation: '',
            department: '',
            ctc: '',
            status: ''
        }

    }

    // Input Handling methods ------- START
    handleSubmit = (event) => {
        event.preventDefault();
        let d = this.state;
        document.write('<p>' + JSON.stringify(d) +'</p>');

    // ProcessRecords(JSON.stringify(this.state.empId));
    }
    handleInputChange = (event) => {
      event.preventDefault()
      console.log(event.target.name, event.target.value);
      this.setState({
        [event.target.name]: event.target.value
      })
  // Input Handling methods ------- END

  };
  render(){
    return (
      <div className = "App">
        <div className = "row">
          <h1>Candidate Registration</h1>
        </div>

        <section className = "section-form">
          <form className = "contact-form" onSubmit = {this.handleSubmit} >
          {/* -------------Reusable ---- Employee ID----------------- */}
            <AllELements 
                labelName = "Applicant ID"
                elementType = "input" type = "text"
                id = "applicantId" placeholder = "Unique Registration id" handler = {this.handleInputChange}>
            </AllELements>
          {/* -------------Reusable ---- Name----------------- */}
            <AllELements 
                labelName = "First Name"
                elementType = "input" type = "text"
                id = "firstName" placeholder = "First Name" handler = {this.handleInputChange}>
            </AllELements>

            {/* -------------Reusable ---- lastName----------------- */}
            <AllELements 
                labelName = "Last Name"
                elementType = "input" type = "text"
                id = "lastName" placeholder = "Last Name" handler = {this.handleInputChange}>
            </AllELements>
            {/* -------------Reusable ---- Email ID----------------- */}
            <AllELements 
                labelName = "Email Id"
                elementType = "input" type = "email"
                id = "emailId" placeholder = "Valid Email Id" handler = {this.handleInputChange}>
            </AllELements>
            {/* -------------Reusable ---- Mobile----------------- */}
            <AllELements 
                labelName = "Mobile Number"
                elementType = "input" type = "text"
                id = "number" placeholder = "Primary Contact Number" handler = {this.handleInputChange}>
            </AllELements>
            {/* -------------Date Of Birth----------------- */}
            <AllELements 
                labelName = "Date Of Birth"
                elementType = "input" type = "date"
                id = "dob" placeholder = {null} handler = {this.handleInputChange}>
            </AllELements>
            {/* -------------Address----------------- */}
            <AllELements 
                labelName = "Address"
                elementType = "textarea" type = "text"
                id = "address" placeholder = "Permanent Address" handler = {this.handleInputChange}>
            </AllELements>
            {/* -------------Department----------------- */}
            <AllELements 
                labelName = "Department"
                elementType = "dropDown" id = "department" handler = {this.handleInputChange}
                select = {
                        [{
                            opt1Value: "back-end",
                            opt1Name: "Back End"
                        },{
                            opt1Value: "front-end",
                            opt1Name: "Front End"
                        },{
                            opt1Value: "ios",
                            opt1Name: "IOS Developer"
                        },{
                            opt1Value: "android",
                            opt1Name: "Android Developer"
                        },{
                            opt1Value: "other",
                            opt1Name: "Other"                            
                        }]
                }>
            </AllELements>
            {/* -------------Designation----------------- */}
            <AllELements 
                labelName = "Designation"
                elementType = "dropDown" id = "designation" handler = {this.handleInputChange}
                select = {
                        [{
                            opt1Value: "back-end",
                            opt1Name: "Back End Developer"
                        },{
                            opt1Value: "front-end",
                            opt1Name: "Front End Developer"
                        },{
                            opt1Value: "ios",
                            opt1Name: "IOS Developer"
                        },{
                            opt1Value: "android",
                            opt1Name: "Android Developer"
                        },{
                            opt1Value: "other",
                            opt1Name: "Other"                            
                        }]
                }>
            </AllELements>
            {/* -------------CTC----------------- */}
            <AllELements 
                labelName = "CTC"
                elementType = "input" type = "number"
                id = "ctc" placeholder = "Current CTC" handler = {this.handleInputChange}>
            </AllELements>
            {/* -------------Marital Status----------------- */}
            <div className="row">
                <div className="col span-1-of-3">
                    <label>Status</label>
                </div>
                <div className="col span-2-of-3">
                    <label>Married: </label>
                    <input type="checkbox" name="status" value="married" onChange = {this.handleInputChange}/>
                    <label>Single: </label>
                    <input type="checkbox" name="status" value="Single"  onChange = {this.handleInputChange} checked/>
                </div>
            </div>
          {/* -------------Buttons----------------- */}
            <AllELements 
                elementType = "button" type = "submit" value = "Submit"
                handler = {this.handleSubmit}>
            </AllELements>

            <AllELements 
                elementType = "button" type = "reset" value = "Reset"
                handler = {this.handleSubmit}>
            </AllELements>
        </form>
        </section>
      </div>
    );
  }
}

export default App;
