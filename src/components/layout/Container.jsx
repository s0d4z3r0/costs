// import styles from "./Container.module.css";

const Container = ({ children, customClass }) => {
  return <div className={`container ${customClass}`}>

    {children}

    </div>;
};

export default Container;
