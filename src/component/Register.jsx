import React,{useState} from 'react'
import {addData} from '../Api/Api'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [input,setInput] = useState({
      id:"",
      name:"",
      email:"",
      phone:""
})
const {id,name,email,phone} = input
const navigate = useNavigate()
const textHandle=(e)=>{
setInput({...input,[e.target.name] : e.target.value})
}

const handleSubmit=async(e)=>{
e.preventDefault()
await addData(input)
navigate('/list')
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
<div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">ID</label>
    <div className="col-sm-10">
      <input type="number" name='id' value={id} onChange={textHandle} className="form-control" id="inputID3"/>
    </div>
  </div>
<div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" name='name' value={name} onChange={textHandle} className="form-control" id="inputName3"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" name='email' value={email} onChange={textHandle} className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Phone</label>
    <div className="col-sm-10">
      <input type="number" name='phone' value={phone} onChange={textHandle} className="form-control" id="inputPhone3"/>
    </div>
  </div>
  
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
    </div>
  )
}

export default Register