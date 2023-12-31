import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="continer">
        <NavLink className="btn btn-outline-primary" to="/">
          Inicio
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/contacto">
          Contacto
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/blog">
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
