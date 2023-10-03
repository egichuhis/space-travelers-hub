import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketCard from './RocketCard';
import { fetchRockets } from '../../redux/features/rockets/rocketsSlice';

const RocketsList = () => {
  const myRockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  console.log('Hehehehe', myRockets);

  return (
    <div>
      <RocketCard />
    </div>
  );
};

export default RocketsList;
