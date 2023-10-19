import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <Link to="/costs/">Home</Link>
        <Link to="/costs/company">Company</Link>
        <Link to="/costs/contact">Contact</Link>
        <Link to="/costs/newproject">New Project</Link>

        <Outlet />
      </ul>
    </div>
  );
}

export default App;
