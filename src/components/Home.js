import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Badge } from 'react-bootstrap';
import '../styles/Home.css'; // Ruta relativa al archivo CSS
import shorts from '../library/shorts';

const SHORTS = shorts;

function Short(props) {
  const { short, index, onClick } = props;

  return (
    <div className="col-lg-3" onClick={() => onClick(short)}>
      <div className="card text-white hover-zoom-interest">
        <div className="card-img-wrapper">
          <img src={short.image} className="card-img zoom-effect img-low" alt={short.title} />
        </div>
        <div className="card-img-overlay d-flex flex-column justify-content-between">
          <h5 className="text-end" style={{ float: 'right', clear: 'both' }}>
            {index === 0 && (
              <Badge bg="warning text-black"><i className='fas fa-certificate'></i> Novedad</Badge>
            )}
          </h5>
          <h2 className={`card-title title-short text-center text-shorts ${short.classAttText}`} style={{ flex: '1', marginTop: '35%' }}>{short.title}</h2>
          <h4 className={`card-title title-short text-center ${short.classAttText} mobile-h4`} style={{ flex: '0' }}>{short.author}</h4>
        </div>
      </div>
    </div>
  );
}

function ShortList(props) {
  const { shorts, onCardClick } = props;

  return (
    <>
      {shorts.map((short, index) => (
        <Short key={short.id} short={short} index={index} onClick={onCardClick} />
      ))}
    </>
  );
}

const Home = () => {
  const [state, setState] = useState({
    shorts: SHORTS,
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedShort, setSelectedShort] = useState(null);

  const handleCardClick = (short) => {
    setSelectedShort(short);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container-fluid home-style">
      <div className="row">
        {/* Contenido principal con cards en el centro */}
        <main className="col-md-10 col-lg-10 mx-auto px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2 text-shorts">Story Mixlife</h1>
          </div>
          <div className="row row-cols-2 row-cols-md-2 g-4">
            <ShortList shorts={state.shorts} onCardClick={handleCardClick} />
          </div>
        </main>
      </div>

      {selectedShort && (
        <Modal className="home-style" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedShort.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedShort.tale}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Home;
