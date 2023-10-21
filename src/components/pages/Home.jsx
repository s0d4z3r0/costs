import investment from "../../img/Investment.svg";
import LinkButton from "../layout/LinkButton";

const Home = () => {
  return (
    <section className="home_container">
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Gerencie seus projetos agora mesmo!</p>
      <LinkButton to={"/costs/newproject"} text={"Criar Projeto"} />
      <img src={investment} alt="Costs" />
    </section>
  );
};

export default Home;
