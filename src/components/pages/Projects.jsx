import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import { useEffect, useState } from "react";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Loader from "../layout/Loader";

const Projects = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [projects, setProjects] = useState([]);
  const [loader, setLoader] = useState(true);
  const [projectMessage, setProjectMessage] = useState("");

  // Monitorando se há message
  useEffect(() => {
    if (location.state) {
      setMessage(location.state.message);
    }
  }, [location]);

  // Consumindo API
  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Removendo ID
  const removeProject = (id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        // mensagem de remoção
        setProjectMessage("Projeto removido com sucesso");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="project_container">
      <div className="project_title_container">
        <h1>Meus Projetos</h1>
        <LinkButton text="Criar Projeto" to="/newproject" />
      </div>
      {message && (
        <Message
          msg={message}
          type="success"
          time={3000}
          setMessage={setMessage}
        />
      )}
      {projectMessage && (
        <Message
          msg={projectMessage}
          type="error"
          time={3000}
          setProjectMessage={setProjectMessage}
        />
      )}
      <Container customClass="start">
        {projects &&
          projects
            .map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category.name}
                handleRemove={removeProject}
              />
            ))
            .reverse()}
        {loader && <Loader />}
        {!loader && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
};

export default Projects;
