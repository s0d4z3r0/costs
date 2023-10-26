import { Link } from "react-router-dom";

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className="card">
      <h4>{name}</h4>
      <span>Orçamento: R${budget}</span>
      <p>
        <span className={`dot dot_${category}`}></span>
        {category}
      </p>
      <div className="card_actions">
        <Link to={"/"}>
          <button className="btn edit">
            <i className="bi bi-pencil"></i>
          </button>
        </Link>
        <button className="btn delete" onClick={remove}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
