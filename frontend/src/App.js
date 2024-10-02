import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Discos from './components/Discos/Discos';
import Generos from './components/Generos/Generos';
import { Inicio } from './components/Inicio';
import Interpretes from './components/Interpretes/Interpretes';
import { Menu } from './components/Menu';
import Sellos from './components/Sellos/Sellos';
import Ventas from './components/Ventas/Ventas';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <div className="divBody">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/sellos" element={<Sellos />} />
            <Route path="/interpretes" element={<Interpretes />} />
            <Route path="/generos" element={<Generos />} />
            <Route path="/discos" element={<Discos />} />
            <Route path="/ventas" element={<Ventas />} />

            <Route path="*" element={<Navigate to="/inicio" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;