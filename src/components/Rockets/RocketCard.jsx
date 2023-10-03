import React from 'react';
import RocketImg from '../../imgs/rocket.jpeg';

const RocketCard = () => (
  <div className="container py-4 py-xl-5">
    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div className="col-lg-4" style={{ width: '35%' }}>
        <div className="card">
          <img
            alt="rocket"
            className="card-img-top w-100 d-block fit-cover"
            style={{ height: 200 }}
            src={RocketImg}
          />
        </div>
      </div>
      <div className="col-lg-8" style={{ width: '65%' }}>
        <div className="card">
          <div className="card-body p-4">
            <h4 className="card-title">Falcon 1</h4>
            <p className="card-text">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
              mi porta gravida at eget metus.
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

export default RocketCard;
