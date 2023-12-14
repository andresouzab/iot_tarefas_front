import { Link } from "react-router-dom";


const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">Controle de Tarefas</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inclusão de Tarefas</Link>
          
          </li>
          <li className="nav-item">
            <Link to="/manutencao" className="nav-link">Manutenção de Tarefas</Link>
          </li>
        
        </ul>
      </div>
    </nav>
  );
};


export default MenuSuperior;
