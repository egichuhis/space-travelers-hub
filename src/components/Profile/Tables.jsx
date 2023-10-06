import React from 'react';
import { useSelector } from 'react-redux';

const Tables = () => {
  const myRockets = useSelector((state) => state.rocket.rockets);

  const { missionItem } = useSelector((store) => store.missions);

  const rockets = Array.isArray(myRockets) ? myRockets : [];

  const reservedMissions = missionItem.filter(
    (mission) => mission.reserved === true,
  );

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-md-6 border border-secondary">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>My Missions</th>
                </tr>
              </thead>
              <tbody>
                {reservedMissions.map((mission) => (
                  <tr key={mission.mission_id}>
                    <td>{mission.mission_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6 border border-dark border-1">

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>My Rockets</th>
                </tr>
              </thead>
              <tbody>
                {rockets
                  .filter((rocket) => rocket.reserved === true)
                  .map((rocket) => (
                    <tr key={rocket.id}>
                      <td>{rocket.name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
