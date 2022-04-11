import { useEffect,useState } from "react"
import Wrapper from "../assets/wrappers/RegisterPage"
import { Logo,FormRow,Alart } from "../components"

const initialState={
  name:'',
  password:'',
  email:'',
  isMember:true,
  showAlert:false
}

const Register = () => {
  
  const[values,setValues]=useState(initialState)

  const toggleMember=()=>{
    setValues({...values,isMember:!values.isMember})
  }

  const onSubmit=(e)=>{
      e.preventDefault()
      console.log(e.target)
  }

  const handleChange=(e)=>{
    console.log(e.target)
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
      <Logo/>
      <h3>{!values.isMember? 'Login':'Register'}</h3>
      {values.showAlert && <Alart alartMessage='alert goes here'/>}
     
      {
        values.isMember &&(
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
      <p>{!values.isMember ? 'Not a member yet ?' : 'Alrady a member ?'} 
      <button onClick={toggleMember} className='member-btn'> 
      {!values.isMember ? 'Register':'Login'}</button>
      </p>
      </form>
      
      
    </Wrapper>
  )
}

export default Register