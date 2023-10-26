import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import { useEffect, useState } from "react"


const Projects = () => {

  const location = useLocation()
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    if(location.state){
      setMessage(location.state.message)
    }
  }, [location])

  console.log(message)

  return (
    <div>
      <h1>Meus Projects</h1>
      <Message msg={message} type="success"/>
    </div>
  )
}

export default Projects