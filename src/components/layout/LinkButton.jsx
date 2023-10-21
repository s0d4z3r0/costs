import {Link} from "react-router-dom"

const LinkButton = ({to, text}) => {
  return (
    <Link className="btn" to={to}>
        {text}
    </Link>
  )
}

export default LinkButton