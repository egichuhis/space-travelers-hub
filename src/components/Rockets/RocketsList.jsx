import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketCard from './RocketCard';
import { fetchRockets } from '../../redux/features/rocket/rocketSlice';

const RocketsList = () => {
  const myRockets = useSelector((state) => state.rocket.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  console.log('Hehehehe', myRockets);

  return (
    <div>
      {myRockets.map((rocket) => (
        <ul key={rocket.id} className="list-unstyled">
          <li>
            <RocketCard rocket={rocket} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default RocketsList;
