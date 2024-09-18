import "./header.scss";

type HeaderProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Header = (props: HeaderProps) => {
  return (
    <header>
      <span
        id="openSidebar"
        className={`${props.isOpen ? "open" : ""}`}
        onClick={props.toggleSidebar}
      >
        Abrir
      </span>
      <h1 className={`${props.isOpen ? "sidebar-open" : ""}`}>Dev Clients</h1>
    </header>
  );
};

export default Header;
