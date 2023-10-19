import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Container customClass={"min-height"}>
        <Outlet />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
