import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import Submit from "../form/Submit";

const ProjectForm = ({ btnText }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, [])


  return (
    <form className="form">
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select
        name="category_id"
        text="Categoria"
        options={categories}
      />

      <Submit text={btnText} />
    </form>
  );
};

export default ProjectForm;
