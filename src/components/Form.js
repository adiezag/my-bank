import React, {Component, useState} from 'react'


function Form(props){
  const [show, setShow]  = useState(true)

  return (
      <div>
        <p>Update info:</p>
        <form onSubmit={props.changeUser}>
          <label> Username: 
            <input type="text" name="user" />
          </label>
          <br></br>
          <label>Background color: 
            <input type="text" name="hexBg" />
          </label>
          <br></br>
          <label>Text color:
          <input type="text" name="hexTC" />
          </label>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
export default Form;
