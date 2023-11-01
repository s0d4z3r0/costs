import { Link } from "react-router-dom";

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className="project_card">
      <h4>{name}</h4>
      <p>
        Orçamento: <span>R${budget}</span>
      </p>
      <p>
        <span className={`dot dot_${category}`}></span>
        {category}
      </p>
      <div className="project_card_actions">
        <Link to={`/project/${id}`}>
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
