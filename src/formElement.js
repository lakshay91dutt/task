import React from 'react'

const inputElement = (props) => {
    return (
        <div>
            <div className = "row">
                <div className = "col span-1-of-3">
                    <label>{props.label}</label>
                </div>
                <div className = "col span-2-of-3">
                    <input type={props.type} name={props.label} placeholder={props.ph} onChange = {props.meth} required></input>
                </div>
            </div>
            <br></br>
        </div>
    );
}
const dropDownMenu = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col span-1-of-3">
                    <label>{props.label}</label>
                </div>
                <div className="col span-2-of-3">
                    <select name={props.label}>
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
        </div>

    );
}
const checkBox = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col span-1-of-3">
                    <label>{props.label}</label>
                </div>
                <div className="col span-2-of-3">
                    <label>Married: </label>
                    <input type="checkbox" name="status" value="married"/>
                    <label>Single: </label>
                    <input type="checkbox" name="status" value="Single"/>
                </div>
            </div>
        </div>
    );
}
const button = (props) => {
    return (
        <div className="row">
          <div className="col span-1-of-3">
              <label>&nbsp;</label>
              </div>
              <div className="col span-2-of-3">
              <input type={props.type} value={props.name}/>
          </div>            
        </div>
    );
}
export {
    inputElement,
    button,
    dropDownMenu,
    checkBox
}
