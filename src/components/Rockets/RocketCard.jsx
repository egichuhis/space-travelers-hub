import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../../redux/features/rocket/rocketSlice';

const RocketCard = ({ rocket }) => {
  const dispatch = useDispatch();

  const {
    id, name, description, flickr_images: flickrImages, reserved,
  } = rocket || '';

  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancelReservation = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <div className="container py-4 py-xl-5">
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div className="col-lg-4 col-xl-3">
          <div className="card">
            <img
              alt="rocket"
              className="card-img-top w-100 d-block fit-cover img-fluid max-height-200"
              src={flickrImages}
            />
          </div>
        </div>
        <div className="col-lg-8 col-xl-9">
          <div className="card">
            <div className="card-body p-4">
              <h4 className="card-title">{name}</h4>
              <p className="card-text">{description}</p>
              {reserved ? (
                <button
                  onClick={() => handleCancelReservation(id)}
                  className="btn btn-outline-secondary"
                  type="button"
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  onClick={() => handleReserveRocket(id)}
                  className="btn btn-primary"
                  type="button"
                >
                  Reserve Rocket
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImages: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketCard;
