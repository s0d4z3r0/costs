import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../layout/Loader";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState("");
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [typeMessage, setTypeMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [services, setServices] = useState([]);

  //   GET na API
  useEffect(() => {
    // Simulando um loader com tempo de resposta utilizando setTimeOut
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
          setServices(data.services);
        })
        .catch((err) => console.log(err));
    }, 300);

    return () => clearTimeout(time);
  }, [id]);

  //   PATCH na API
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

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };
  const createService = (project) => {
    // last service
    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    // maximum value validation
    if (newCost > parseFloat(project.budget)) {
      setTextMessage(
        "Custo do Serviço ultrapassa Orçamento Total. Verifique o valor do serviço."
      );
      setTypeMessage("error");
      setShowMessage(true);
      project.services.pop();
      return false;
    }

    // add service cost to project total cost
    project.cost = newCost;

    // update project
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then(() => {
        setShowServiceForm(false);
        setTextMessage("Serviço adicionado com sucesso!");
        setTypeMessage("success");
        setShowMessage(true);
      })
      .catch((err) => console.log(err));
  };

  const removeService = (id, cost) => {
    const servicesUpdated = project.services.filter(
      (service) => service.id != id
    );

    const projectUpdated = project;

    projectUpdated.services = servicesUpdated;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((res) => res.json())
      .then(() => {
        setProject(projectUpdated);
        setServices(servicesUpdated);
        setTextMessage("Serviço removido com sucesso!");
        setTypeMessage("error");
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
                time={3000}
                setTextMessage={setTextMessage}
              />
            )}
            <div className="returnToProjects">
              <Link to={"/projects"}>
                <button className="btn bi bi-arrow-left">Voltar para Projetos</button>
              </Link>
            </div>
            <div className="project_details_container">
              <h1>
                Projeto: <span>{project.name}</span>
              </h1>
              <button className="btn edit_back" onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar Projeto" : "Voltar"}
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
                  <p>
                    <span>Valor Restante:</span> R$
                    {project.budget - project.cost}
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
            {!showProjectForm ? (
              <div className="service_form_container">
                <div className="service_addTitle_btn">
                  <h2>Adicione um serviço</h2>
                  <button className="btn" onClick={toggleServiceForm}>
                    {!showServiceForm ? (
                      <i className="bi bi-plus-circle"></i>
                    ) : (
                      <i className="bi bi-dash-circle"></i>
                    )}
                  </button>
                </div>
                {showServiceForm ? (
                  <div
                    className={`project_info ${
                      showServiceForm && "project_serviceForm_show"
                    }`}
                  >
                    <div>
                      <ServiceForm
                        handleSubmit={createService}
                        btnText="Adicionar Serviço"
                        projectData={project}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="project_services">
                  <h2>Serviços</h2>
                  <Container customClass="start">
                    {services.length > 0 &&
                      services
                        .map((service) => (
                            <ServiceCard
                              key={service.id}
                              id={service.id}
                              name={service.name}
                              cost={service.cost}
                              description={service.description}
                              handleRemove={removeService}
                            />
                        ))
                        .reverse()}
                    {services.length === 0 && (
                        <p>Ainda não há serviço adicionado.</p>
                    )}
                  </Container>
                </div>
              </div>
            ) : (
              ""
            )}
          </Container>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Project;
