import './App.css';
import Footer from './componentes/footer/Footer';
import Home from './componentes/home/Home';
import Navbar from './componentes/navbar/NavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;
