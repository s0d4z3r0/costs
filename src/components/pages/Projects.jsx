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

  useEffect(() => {
    if (location.state) {
      setMessage(location.state.message);
    }
  }, [location]);

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

  return (
    <div className="project_container">
      <div className="project_title_container">
        <h1>Meus Projetos</h1>
        <LinkButton text="Criar Projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass="start">
        {projects &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
            />
          ))}
        {loader && <Loader />}
        {!loader && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
};

export default Projects;
