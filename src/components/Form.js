import { useState } from 'react';

function Form() {
  const [myData, setData] = useState({firstName:'',lastName:'', email:''});

  const handleSubmit = (event) => {
    event.preventDefault();
    if(myData.firstName === '' || myData.email === '' || myData.lastName === ''){
      alert("Please enter all the fields in the form")
    }
    else{
      alert('The name you entered was:'+myData.firstName+" "+myData.lastName+" "+myData.email)
    }
  }
  const updateValue = (e) => {
      setData((myData)=>({
          ...myData, [e.target.name]:e.target.value
      }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text"
          name="firstName" 
          value={myData.firstName}
          onChange={updateValue}
        />
        <input 
          type="text" 
          name="lastName"
          value={myData.lastName}
          onChange={updateValue}
        />
        <input 
          type="text" 
          name="email"
          value={myData.email}
          onChange={updateValue}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
export default Form;