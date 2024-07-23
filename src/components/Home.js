import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'; // Ruta relativa al archivo CSS

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Navbar lateral vertical a la izquierda */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Perfil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Configuración</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Contenido principal con cards en el centro */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Story Mixlife</h1>
          </div>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            {/* Ejemplo de cards usando Bootstrap */}
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 1</h5>
                  <p className="card-text">Contenido de la tarjeta 1.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 2</h5>
                  <p className="card-text">Contenido de la tarjeta 2.</p>
                </div>
              </div>
            </div>
            {/* Agregar más cards según sea necesario */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
