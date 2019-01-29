import React, { Component } from 'react';

//import './App.css';
import './css/style.css';
import {inputElement as Element} from './formElement'
import {button as Button} from './formElement'
import {dropDownMenu as DropDown} from './formElement'
// import {checkBox as Checkbox} from './formElement'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firsName: '',
      lastName: '', 
      emailId: '',
      doj: '',
      number: '',
      address: '',
      department: '',
      ctc: ''
    } 

  };

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }
  handleInputChange = (event) => {
    console.log(event);
  }
  updateStateValue = (event) => {
    console.log(event);
    console.log(event.target);
  }

  render() {
    const response = this.state;
    return (
      <div className="App">
        <div className="row">
          <h1>EMPLOYEE REGISTRATION</h1>
        </div>
        <section className = "section-form">
          <form onSubmit = {this.handleSubmit} className = "contact-form">  


            <Element label = "First name" ph = "First Name" type = "text" meth = {this.handleInputChange}></Element>
          
          
          
          
            <Element label = "Surname" ph = "Last Name" type = "text"></Element>
            <Element label = "Email" ph = " Valid Email ID" type = "email"></Element>
            <Element label = "Date of joining" ph = "Joining Date" type = "date"></Element>
            <Element label = "Mobile Number" ph = "Primary Mobile Number" type = "text"></Element>
            <Element label = "Address" ph = "Residential Addres" type = "text" input = "textarea"></Element>
            {/* <Checkbox label = "Status"></Checkbox> */}
            <DropDown label = "Department" value = {["back-end"]}></DropDown>
            {/* <Element label = "Department" ph = "Assigned Department" type = "text"></Element> */}
            <Element label = "CTC" ph = "Offered CTC in lacs per annum" type = "number"></Element>

            {/* <DropDown label = "Designation"></DropDown> */}
            <Button name = "Submit" type = "submit"></Button>
            <Button name = "Reset" type = "reset"></Button>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
