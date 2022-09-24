import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="">
      <nav className="">
        <Link to="/join">Join</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
