import React from 'react';
import PropTypes from 'prop-types';

const RocketCard = ({ rocket }) => {
  const { name, description, flickr_images: flickrImages } = rocket[0] || '';

  return (
    <div className="container py-4 py-xl-5">
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div className="col-lg-4" style={{ width: '35%' }}>
          <div className="card">
            <img
              alt="rocket"
              className="card-img-top w-100 d-block fit-cover"
              style={{ height: 200 }}
              src={flickrImages}
            />
          </div>
        </div>
        <div className="col-lg-8" style={{ width: '65%' }}>
          <div className="card">
            <div className="card-body p-4">
              <h4 className="card-title">{name}</h4>
              <p className="card-text">
                {description}
              </p>
              <button className="btn btn-primary" type="button">
                Reserve Rocket
              </button>
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
  }).isRequired,
};

export default RocketCard;
