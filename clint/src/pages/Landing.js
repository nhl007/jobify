import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
      <Logo/>
      </nav>
      <div className='container page'>
      <div className='info'>
        <h1>Job <span>Tracking</span> App</h1>
        <p>Readymade trust fund four dollar toast viral hashtag. Biodiesel gluten-free green juice polaroid twee. Celiac microdosing gentrify, migas leggings tousled hell of cold-pressed affogato asymmetrical retro gluten-free drinking vinegar authentic pickled.</p>
        <button className='btn btn-hero'>Login/Register</button>
      </div>
      <img className='img main-img' alt='main' src={main}/>        
      </div>
    </Wrapper>
  )
}

export default Landing
