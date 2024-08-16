import './App.css';
import Footer from './componentes/footer/Footer';
import Home from './componentes/home/Home';
import Navbar from './componentes/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategoria from './componentes/categoria/listaCategoria/ListaCategoria';
import FormularioCategoria from './componentes/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './componentes/categoria/deletarCategoria/DeletarCategoria';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/categorias/criar" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;
