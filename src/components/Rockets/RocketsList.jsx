import React from 'react';
import { useSelector } from 'react-redux';
import RocketCard from './RocketCard';

const RocketsList = () => {
  const myRockets = useSelector((state) => state.rocket.rockets);
  const isLoading = useSelector((state) => state.rocket.loading);

  const rockets = Array.isArray(myRockets) ? myRockets : [];

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">Loading...</div>
      ) : (
        rockets.map((rocket) => (
          <ul key={rocket.id} className="list-unstyled">
            <li>
              <RocketCard rocket={rocket} />
            </li>
          </ul>
        ))
      )}
    </div>
  );
};

export default RocketsList;
