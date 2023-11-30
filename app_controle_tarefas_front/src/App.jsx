import usuarios from './assets/components/usuarios'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

const App = () => {
  return(  //tudo que vai aqui no return é o que aparece na aplicação
    <>
      <Router>
      <Routes>
        <Route exact path="/" Component={usuarios}/>
      </Routes>
      </Router>
    </>
  )
}

export default App;