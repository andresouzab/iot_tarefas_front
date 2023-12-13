import Tarefas from './components/tarefas';
import Usuarios from './components/usuarios'
import MenuSuperior from './components/MenuSuperior';
import manutencaoTarefas from './components/manutencaoTarefas';
import FormularioLogin from './components/login';
import {BrowserRouter as Router,Route, Routes, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from './components/AuthProvider';

const ProtectedRoute = ({children}) => {
  const {autenticado} = useAuth();
  return autenticado ? children : <Navigate to="/login"/>
};

const RoutesWithAuth = () => {
  const { autenticado } = useAuth();
  return (
    <Router>
      {autenticado && <MenuSuperior />}
      <Routes>
      <Route path="/login" element={<FormularioLogin />} />
                <Route path="/" element={autenticado ? <Navigate to="/tarefas" /> : <FormularioLogin />} />
                <Route path="/tarefas" element={<ProtectedRoute><Tarefas/></ProtectedRoute>} />
                <Route path="/manutencao" element={<ProtectedRoute><manutencaoTarefas/></ProtectedRoute>} />
                <Route path="/user" element={<ProtectedRoute><Usuarios/></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
      <AuthProvider>
          <RoutesWithAuth/>
      </AuthProvider>
  );
};

export default App;