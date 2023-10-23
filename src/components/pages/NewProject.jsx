import ProjectForm from "../project/ProjectForm"


const NewProject = () => {
  return (
    <div className="">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar Projeto"/>
    </div>
  )
}

export default NewProject