import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Badge } from 'react-bootstrap';
import '../styles/BL.css'; // Ruta relativa al archivo CSS
import blTales from '../library/blTales';

const BLTALES = blTales;

function BlTale(props) {
  const { blTale, index, onClick } = props;

  return (
    <div className="col-lg-3" onClick={() => onClick(blTale)}>
      <div className="card text-white hover-zoom-interest">
        <div className="card-img-wrapper">
          <img src={blTale.image} className="card-img zoom-effect" alt={blTale.title} />
        </div>
        <div className="card-img-overlay d-flex flex-column justify-content-between">
          <h5 className="text-end" style={{ float: 'right', clear: 'both' }}>
            {index === 0 && (
              <Badge bg="warning text-black"><i className='fas fa-certificate'></i> Novedad</Badge>
            )}
          </h5>
          <h2 className={`card-title title-blTale text-center ${blTale.classAttText}`} style={{ flex: '1', marginTop: '35%' }}>{blTale.title}</h2>
          <h4 className={`card-title title-blTale text-center ${blTale.classAttText} mobile-h4`} style={{ flex: '0' }}>{blTale.author}</h4>
        </div>
      </div>
    </div>
  );
}

function BlTaleList(props) {
  const { blTales, onCardClick } = props;

  return (
    <>
      {blTales.map((blTale, index) => (
        <BlTale key={blTale.id} blTale={blTale} index={index} onClick={onCardClick} />
      ))}
    </>
  );
}

const BL = () => {
  const [state, setState] = useState({
    blTales: BLTALES,
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedBlTale, setSelectedBlTale] = useState(null);

  const handleCardClick = (short) => {
    setSelectedBlTale(short);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container-fluid bl-style">
      <div className="row">
        {/* Contenido principal con cards en el centro */}
        <main className="col-md-10 col-lg-10 mx-auto px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2 text-primary">B&L</h1>
          </div>
          <div className="row row-cols-2 row-cols-md-2 g-4">
            <BlTaleList blTales={state.blTales} onCardClick={handleCardClick} />
          </div>
        </main>
      </div>

      {selectedBlTale && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedBlTale.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedBlTale.tale}</p>
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

export default BL;