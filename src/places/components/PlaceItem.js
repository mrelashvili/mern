import React, { useState } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElement/Card';
import Map from '../../shared/components/UIElement/Map';
import Modal from '../../shared/components/UIElement/Modal';
import './PlaceItem.css';

const PlaceItem = ({ place }) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const { id, imageUrl, title, description, address, creator, location } =
    place;

  console.log('locc', location);
  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <span>lat: {location.lat}</span>
          <span>lng: {location.lng}</span>
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="place-item__info">
            <h3>{title}</h3>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              View on Map
            </Button>
            <Button to={`/places/${id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
