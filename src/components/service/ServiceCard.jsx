import { useState } from "react";

const ServiceCard = ({ id, name, cost, description, handleRemove }) => {
  const [serviceCheck, setServiceCheck] = useState(false);

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  }

  const checkService = () => {
    setServiceCheck(!serviceCheck);
  };

  return (
    <div className={`project_card ${serviceCheck ? "project_check" : "project_out"}`}>
      <h4>{name}</h4>
      <p>
        <span>Custo:</span> R${cost}
      </p>
      <p>
        <span>Descrição:</span> {description}
      </p>
      <div className="project_card_actions">
        <button className="btn check" onClick={checkService}>
          <i className="bi bi-check-lg"></i>
        </button>
        <button className="btn delete" onClick={remove}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
