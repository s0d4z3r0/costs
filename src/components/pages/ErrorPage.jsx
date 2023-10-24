import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
        <h1>ERRO 404!</h1>

        <Link to="/">Retornar para Home</Link>
    </div>
  )
}

export default ErrorPage