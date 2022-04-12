import { useAppContext } from "../context/appContext"
const Alart = () => {
  const{alertText,alertType}=useAppContext()
  return (
    <div 
    className={`alert alert-${alertType}`}>{alertText}</div>
  )
}

export default Alart