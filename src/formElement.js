import React from 'react'

const form = (props) => {
    return (
        <div>
            <div className = "row">
                <div className = "col span-1-of-3">
                    <label>{props.label}</label>
                </div>
                <div className = "col span-2-of-3">
                    <input type={props.type} name={props.label} placeholder={props.ph} required></input>
                </div>
            </div>
            <br></br>
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
    form,
    button
}
