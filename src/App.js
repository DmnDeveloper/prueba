import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import Header from './components/Header';
import Cotizador from './pages/Cotizador'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Header />
      <Routes>
        <Route exact path='/' element={<Cotizador />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
