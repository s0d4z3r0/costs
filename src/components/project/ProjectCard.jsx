import { Link } from "react-router-dom";

const ProjectCard = ({
  name,
  budget,
  category,
  cost,
  services,
  handleRemove,
}) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <span>Orçamento: R${budget}</span>
      <p>
        <span className={`dot dot_${category}`}></span>
        {category}
      </p>
      <div className="card_actions">
          <Link to={'/'}>
              <button className="btn edit">
                <i className="bi bi-pencil"></i>
              </button>
          </Link>
          <button className="btn delete">
            <i className="bi bi-trash"></i>
          </button>
      </div>
    </div>
  );
};

export default ProjectCard;
