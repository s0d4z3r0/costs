import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Fale conosco</h1>
      <p>
        Ligue agora para falar com um de nossos consultores ou se preferir entre
        em contato por e-mail.
      </p>
      <div className="contact_links">
        <Link to={"tel:(61)3333-3333"}>
          <i className="bi bi-telephone"></i>-
          <span>(61)3333-3333</span>
        </Link>
        <Link to={"mailto:contato@costs.com"}>
          <i className="bi bi-envelope"></i>-
          <span>contato@costs.com</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
