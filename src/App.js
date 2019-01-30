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
        this.json = {}
    }
    loadJSON = () => {
        const jsonFileData = window.localStorage.getItem()
    }
    handleSubmit = (event) => {
      event.preventDefault();
      document.write('<p>' + JSON.stringify(this.state) +'</p>');
    }
    handleInputChange = (event) => {
      event.preventDefault()
      console.log(event.target.name, event.target.value);
      this.setState({
        [event.target.name]: event.target.value
      })
  };
  render(){
    return (
      <div className = "App">
        <div className = "row">
          <h1>Employee Registration</h1>
        </div>

        <section className = "section-form">
          <form className = "contact-form" onSubmit = {this.handleSubmit} >
          {/* -------------Employee ID----------------- */}
          <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>Employee ID</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <input type= "text" name= "empId" placeholder= "Unique Employee id" onChange = {this.handleInputChange} defaultValue = {null}></input>
                  </div>
            </div>
            <br></br>
          {/* -------------Name----------------- */}
            <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>First Name</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <input type= "text" name= "firstName" placeholder= "First Name" onChange = {this.handleInputChange} defaultValue = {null}></input>
                  </div>
            </div>
            <br></br>
            {/* -------------lastName----------------- */}
            <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>Last Name</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <input type= "text" name= "lastName" placeholder= "Last Name" onChange = {this.handleInputChange} defaultValue = {null}></input>
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
                      <input type= "text" name= "mobile" placeholder= "Mobile Number" onChange = {this.handleInputChange}  defaultValue = {null}></input>
                  </div>
            </div>
            <br></br>
            {/* -------------DOJ----------------- */}
            <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>Date Of Joining</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <input type= "date" name= "doj" onChange = {this.handleInputChange}  defaultValue = {null}></input>
                  </div>
            </div>
            <br></br>
            {/* -------------Address----------------- */}
            <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>Address</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <textarea type= "text" name= "address" placeholder= "Residential Address" onChange = {this.handleInputChange}  defaultValue = {null}></textarea>
                  </div>
            </div>
            <br></br>
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
            <div className = "row">
                  <div className = "col span-1-of-3">
                      <label>CTC</label>
                  </div>
                  <div className = "col span-2-of-3">
                      <input type= "number" name= "ctc" placeholder= "Offered CTC (in Lacs per annum)" onChange = {this.handleInputChange} defaultValue = {null}></input>
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
                    <input type="checkbox" name="status" value="married" onChange = {this.handleInputChange}/>
                    <label>Single: </label>
                    <input type="checkbox" name="status" value="Single"  onChange = {this.handleInputChange} checked/>
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
