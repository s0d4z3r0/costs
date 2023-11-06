import { useState } from "react"
import Input from "../form/Input"
import Submit from "../form/Submit"

const ServiceForm = ({handleSubmit, btnText, projectData}) => {

    const [service, setService] = useState({})

    const submit = (e) => {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    const handleChange = (e) => {

        setService({...service, [e.target.name]: e.target.value})
    }
    
  return (
    <div>
        <form onSubmit={submit} className="form_service">
            <Input type="text" text="Nome do Serviço" name="name"
            placeholder="Insira o nome do serviço"
            handleOnChange={handleChange}/>
            <Input type="number" text="Custo do Serviço" name="cost"
            placeholder="Insira o valor do serviço"
            handleOnChange={handleChange}/>
            <Input type="text" text="Descrição do Serviço" name="description"
            placeholder="Insira o serviço"
            handleOnChange={handleChange}/>
            <Submit text={btnText}/>
        </form>
    </div>
  )
}

export default ServiceForm