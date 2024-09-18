import { NavLink } from "react-router-dom";

import "./sidebar.scss";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = (props: SidebarProps) => {
  return (
    <aside className={`${props.isOpen ? "open" : ""}`}>
      <span id="closeSidebar" onClick={props.toggleSidebar}>
        Fechar
      </span>
      <nav>
        <NavLink to={"/"}>Início</NavLink>
        <NavLink to={"/create"}>Criar</NavLink>
        <NavLink to={"/detail"}>Detalhes</NavLink>
        <NavLink to={"/about"}>Sobre</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
