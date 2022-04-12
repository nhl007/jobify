import {useState } from "react"
import Wrapper from "../assets/wrappers/RegisterPage"
import { Logo,FormRow,Alart } from "../components"
import { useAppContext } from "../context/appContext"

const initialState={
  name:'',
  email:'',
  password:'',
  isMember:false
}

const Register = () => {
  const {isLoading,showAlert,displayAlert}=useAppContext()
  
  const[values,setValues]=useState(initialState)

  const toggleMember=()=>{
    setValues({...values,isMember:!values.isMember})
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    console.log(values)
  }

  const handleChange=(e)=>{
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
      <Logo/>
      <h3>{values.isMember? 'Login':'Register'}</h3>
      
      {showAlert && <Alart/>}
     
      {
        !values.isMember &&(
          <FormRow 
          type='text' 
          name='name' 
          value={values.name} 
          handleChange={handleChange} 
          />
        )
      } 
      <FormRow 
      type='email' 
      name='email' 
      value={values.email} 
      handleChange={handleChange}
      labelText='email' 
      />
      
      <FormRow 
      type='password' 
      name='password' 
      value={values.password} 
      handleChange={handleChange}
      labelText='password' 
      />
      
      <button className="btn btn-block" type="submit">submit</button>
      <p>{values.isMember ?'Not a member yet ?':'Alrady a member ?' } 
      <button onClick={toggleMember} className='member-btn'> 
      {values.isMember ?'Register':'Login'}</button>
      </p>
      </form>
      
      
    </Wrapper>
  )
}

export default Register