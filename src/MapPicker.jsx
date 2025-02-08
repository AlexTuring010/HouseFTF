import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Modal, Button } from 'react-bootstrap';
import earthIcon from './assets/earth.gif'; // Adjust the path as necessary
import './MapPicker.css'; // Import the CSS file

const MapPicker = ({ onLocationSelect, className }) => {
  const [markerPosition, setMarkerPosition] = useState([37.7577, -122.4376]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const LocationMarker = () => {
    useMapEvents({ 
      click(e) {
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return markerPosition === null ? null : (
      <Marker position={markerPosition}></Marker>
    );
  };

  const handleConfirm = () => {
    onLocationSelect({ latitude: markerPosition[0], longitude: markerPosition[1] });
    closeModal();
  };

  return (
    <div>
      <div onClick={openModal} style={{ cursor: 'pointer', display: 'inline-block' }} className={className}>
        <img src={earthIcon} alt="Select Location" className={isOpen ? 'earth-icon' : ''} />
      </div>
      <Modal show={isOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MapContainer center={markerPosition} zoom={13} style={{ height: '400px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
          </MapContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MapPicker;