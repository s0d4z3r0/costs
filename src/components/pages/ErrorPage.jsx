import { Link } from "react-router-dom";
import error from '../../img/erro-404.png'

const ErrorPage = () => {
  return (
    <div className="error_page">
        <h1>ERRO 404!</h1>
        <p>Infelizmente a página que você procura não existe.</p>

        <img src={error} alt="error_img" />

        <Link to="/">
          <i className="bi bi-arrow-left"></i>
          Retornar para Home
        </Link>
    </div>
  )
}

export default ErrorPage