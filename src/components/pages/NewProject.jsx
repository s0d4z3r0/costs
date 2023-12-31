import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";

const NewProject = () => {
  const navigate = useNavigate();

  const createPost = (project) => {
    // inicializando cost e services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then(res => res.json())
    .then(() => {
      // redirect
      navigate('/projects', {state: {message: 'Projeto criado com sucesso!'}})
    })
    .catch(err => console.log(err))

  }

  return (
    <div className="new_project">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
};

export default NewProject;
