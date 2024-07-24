import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="d-flex flex-column flex-lg-row">
          {/* Navbar lateral vertical para pantallas grandes */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light flex-lg-column p-0">
            <div className="container-fluid flex-lg-column">
              <Link className="navbar-brand" to="/">Shorts Mixlife</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav flex-lg-column">
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/others">Others</Link>
                  </li>
                  {/* Puedes agregar más enlaces aquí */}
                </ul>
              </div>
            </div>
          </nav>

          {/* Configuración de las rutas */}
          <div className="flex-grow-1 p-3">
            <Routes>
              <Route path="/home" element={<Home />} />
              {/* Puedes agregar más rutas aquí */}
              <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
