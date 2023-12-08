import tarefas from './components/tarefas';
import usuarios from './components/usuarios'
import MenuSuperior from './components/MenuSuperior';
import manutencaoTarefas from './components/manutencaoTarefas';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return(  //tudo que vai aqui no return é o que aparece na aplicação
    <>
      <Router>
        <MenuSuperior>
      <Routes>
      <Route exact path="/" Component={manutencaoTarefas}/>
      <Route exact path="/" Component={tarefas}/>
      </Routes>
      </Router>
    </>
)
}

export default App;