import { Outlet } from "react-router-dom"

const LayoutPublico = () => {
  return (
    <div>

        <Outlet />

      <footer>Este es el footer</footer>
    </div>
  );
}

export default LayoutPublico;
