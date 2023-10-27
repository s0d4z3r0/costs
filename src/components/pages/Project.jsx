import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState("");
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [typeMessage, setTypeMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 1000);

    return () => clearTimeout(time);
  }, [id]);

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const editPost = (project) => {
    // budget validation
    if (project.budget < project.cost) {
      // message
      setTypeMessage("error");
      setTextMessage(
        "Valor de orçamento não pode ser menor que o já utilizado."
      );
      setShowMessage(true);
      return false;
    }

    fetch(`http://localhost:5000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        // message
        setTypeMessage("success");
        setTextMessage("Alterações feitas com sucesso!");
        setShowMessage(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {project ? (
        <div className="project_details">
          <Container customClass="column">
            {showMessage && (
              <Message
                type={typeMessage}
                msg={textMessage}
                time={7000}
                setTextMessage={setTextMessage}
              />
            )}
            <div className="details_container">
              <h1>Projeto {project.name}</h1>
              <button className="btn" onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar Projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className="project_info">
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado:</span> R${project.cost}
                  </p>
                </div>
              ) : (
                <div className="project_info">
                  <ProjectForm
                    projectData={project}
                    btnText="Atualizar"
                    handleSubmit={editPost}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Project;
