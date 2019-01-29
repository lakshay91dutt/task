import React, { Component } from 'react';

//import './App.css';
import './css/style.css';
import {form as Element} from './formElement'
import {button as Button} from './formElement'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="row">
          <h1>EMPLOYEE REGISTRATION</h1>
        </div>
        <section className = "section-form">
          <form method = "get" action = "#" className = "contact-form">            
            <Element label = "First name" ph = "First Name" type = "text" input = "input"></Element>
            <Element label = "Surname" ph = "Last Name" type = "text" input = "input"></Element>
            <Element label = "Email" ph = " Valid Email ID" type = "email" input = "input"></Element>
            <Element label = "Date of joining" ph = "Joining Date" type = "date" input = "input"></Element>
            <Element label = "Mobile Number" ph = "Primary Mobile Number" type = "text" input = "input"></Element>
            <Element label = "Address" ph = "Residential Addres" type = "text" input = "textarea"></Element>
            <Element label = "Designation" ph = "Current Designation" type = "text" input = "input"></Element>
            <Element label = "Department" ph = "Assigned Department" type = "text" input = "input"></Element>
            <Element label = "CTC" ph = "Offered CTC in lacs per annum" type = "number" input = "input"></Element>
            <Element label = "Status" ph = "Married or Single" type = "text" input = "input"></Element>
            <Button name = "Submit" type = "submit"></Button>
            <Button name = "Reset" type = "reset"></Button>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
