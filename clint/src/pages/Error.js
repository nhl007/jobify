import { Link } from "react-router-dom"
import img from '../assets/images/not-found.svg'
import Wrapper from "../assets/wrappers/ErrorPage"
const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="Error"/>
        <h3>OOPS! Page Not Found</h3>
        <p>Seems like you have misspelled the url name</p>
        <Link to='/'>Back Home</Link>
      </div>
    </Wrapper>
  )
  
}

export default Error