import React, { Component } from 'react';
//import './App.css';
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
            doj: '',
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

        //ProcessRecords(JSON.stringify(this.state));
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
          <h1>Employee Registration</h1>
        </div>

        <section className = "section-form">
          <form className = "contact-form" onSubmit = {this.handleSubmit} >
          {/* -------------Reusable ---- Employee ID----------------- */}
            <AllELements 
                labelName = "Employee ID"
                elementType = "input" type = "text"
                id = "empId" placeholder = "Unique Employee id" handler = {this.handleInputChange}>
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
            {/* -------------Email ID----------------- */}
            <AllELements 
                labelName = "Email Id"
                elementType = "input" type = "email"
                id = "emailId" placeholder = "Valid Email Id" handler = {this.handleInputChange}>
            </AllELements>
            {/* -------------Mobile----------------- */}

            <AllELements 
                labelName = "Mobile Number"
                elementType = "input" type = "text"
                id = "number" placeholder = "Primary Contact Number" handler = {this.handleInputChange}>
            </AllELements>
            {/* -------------DOJ----------------- */}
            <AllELements 
                labelName = "Date Of Joining"
                elementType = "input" type = "date"
                id = "doj" placeholder = {null} handler = {this.handleInputChange}>
            </AllELements>
            {/* -------------Address----------------- */}
            <AllELements 
                labelName = "Address"
                elementType = "textarea" type = "text"
                id = "address" placeholder = "Permanent Address" handler = {this.handleInputChange}>
            </AllELements>
            {/* -------------Designation----------------- */}
            <div className="row">
                <div className="col span-1-of-3">
                    <label>Designation</label>
                </div>
                <div className="col span-2-of-3">
                    <select name="designation" onChange = {this.handleInputChange}>
                        <option value="back-end" onChange = {this.handleInputChange}>Back-End Developer</option>
                        <option value="devop" onChange = {this.handleInputChange}>DevOps</option>
                        <option value="front-end"  onChange = {this.handleInputChange} selected>Front-End Developer</option>
                        <option value="ios" onChange = {this.handleInputChange}>IOS Developer</option>
                        <option value="android"  onChange = {this.handleInputChange}>Android Developer</option>
                        <option value="other" onChange = {this.handleInputChange}>Other</option>
                    </select>
                </div>
            </div>
            <br></br>
            {/* -------------Department----------------- */}
            <div className="row">
                <div className="col span-1-of-3">
                    <label>Department</label>
                </div>
                <div className="col span-2-of-3">
                    <select name="department">
                        <option value="web development" onChange = {this.handleInputChange}>Web Development</option>
                        <option value="devop" onChange = {this.handleInputChange}>DevOps</option>
                        <option value="android development"  onChange = {this.handleInputChange} selected>Android Development</option>
                        <option value="ios development" onChange = {this.handleInputChange}>IOS</option>
                    </select>
                </div>
            </div>
            <br></br>            
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
