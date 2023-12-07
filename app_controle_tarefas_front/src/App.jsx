import tarefas from './assets/components/tarefas';
import usuarios from './assets/components/usuarios'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return(  //tudo que vai aqui no return é o que aparece na aplicação
    <>
      <Router>
      <Routes>
        <Route exact path="/" Component={tarefas}/>
      </Routes>
      </Router>
    </>
  )
}

export default App;