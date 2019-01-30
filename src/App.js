import React, { Component } from 'react';
//import './App.css';
import './vendors/css/normalize.css'
import './css/style.css';
import './css/queries.css';
import './vendors/css/grid.css'
class App extends Component {
  constructor (props){
    super (props);

    this.state = {
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
    this.handleSubmit = (event) => {
      event.preventDefault();
      document.write('<p>' + JSON.stringify(this.state) +'</p>');
    }
    this.handleInputChange = (event) => {
      event.preventDefault()
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  };
  render(){
    return (
      <div className = "App">
        <div className = "row">
          <h1>Employee Registration</h1>
        </div>

        <section className = "section-form">
          <form className = "contact-form" onSubmit = {this.handleSubmit} >
          {/* -------------Name----------------- */}
            <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>First Name</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <input type= "text" name= "firstName" placeholder= "First Name" onChange = {this.handleInputChange}></input>
                  </div>
            </div>
            <br></br>
            {/* -------------lastName----------------- */}
            <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>Last Name</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <input type= "text" name= "lastName" placeholder= "Last Name" onChange = {this.handleInputChange}></input>
                  </div>
            </div>
            <br></br>
            {/* -------------Email ID----------------- */}
            <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>Email ID</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <input type= "email" name= "emailId" placeholder= "Valid Email Id" required onChange = {this.handleInputChange}></input>
                  </div>
            </div>
            <br></br>
            {/* -------------Mobile----------------- */}
            <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>Mobile</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <input type= "text" name= "mobile" placeholder= "Mobile Number" onChange = {this.handleInputChange}></input>
                  </div>
            </div>
            <br></br>
            {/* -------------DOJ----------------- */}
            <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>Date Of Joining</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <input type= "date" name= "doj" onChange = {this.handleInputChange}></input>
                  </div>
            </div>
            <br></br>
            {/* -------------Address----------------- */}
            <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>Address</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <textarea type= "text" name= "address" placeholder= "Residential Address" onChange = {this.handleInputChange}></textarea>
                  </div>
            </div>
            <br></br>
            {/* -------------Designation----------------- */}
            <div className="row">
                <div className="col span-1-of-3">
                    <label>Designation</label>
                </div>
                <div className="col span-2-of-3">
                    <select name="designation">
                        <option value="back-end">Back-End Developer</option>
                        <option value="devop">DevOps</option>
                        <option value="front-end" selected>Front-End Developer</option>
                        <option value="ios">IOS Developer</option>
                        <option value="android">Android Developer</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <br></br>
            {/* -------------Marital Status----------------- */}
            <div className="row">
                <div className="col span-1-of-3">
                    <label>Status</label>
                </div>
                <div className="col span-2-of-3">
                    <label>Married: </label>
                    <input type="checkbox" name="status" value="married"/>
                    <label>Single: </label>
                    <input type="checkbox" name="status" value="Single"/>
                </div>
            </div>
          {/* -------------Buttons----------------- */}
            <div className="row">
              <div className="col span-1-of-3">
                  <label>&nbsp;</label>
                  </div>
                  <div className="col span-2-of-3">
                  <input type="submit" value="Submit"/>
              </div>            
          </div>

          <div className="row">
            <div className="col span-1-of-3">
                <label>&nbsp;</label>
            </div>
            <div className="col span-2-of-3">
              <input type="reset" value="Reset"/>
            </div>            
          </div>
        </form>
        </section>
      </div>
    );
  }
}

export default App;
