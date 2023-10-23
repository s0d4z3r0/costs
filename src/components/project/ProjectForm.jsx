import Input from "../form/Input";
import Select from "../form/Select";
import Submit from "../form/Submit";

const ProjectForm = ({btnText}) => {
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
      <Select name="category_id" text="Categoria" />

      <Submit text={btnText} />
    </form>
  );
};

export default ProjectForm;
