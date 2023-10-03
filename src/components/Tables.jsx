import React from 'react';
import { useSelector } from 'react-redux';

const Tables = () => {
  const myRockets = useSelector((state) => state.rocket.rockets);

  const rockets = Array.isArray(myRockets) ? myRockets : [];

  return (
    <div className="container" style={{ paddingTop: 15 }}>
      <div className="row">
        <div
          className="col-md-6"
          style={{ border: '0.4px solid rgba(33,37,41,0.68)' }}
        >
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>My Missions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cell 1</td>
                </tr>
                <tr>
                  <td>Cell 1</td>
                </tr>
                <tr>
                  <td>Cell 1</td>
                </tr>
                <tr>
                  <td>Cell 1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="col-md-6"
          style={{ border: '0.4px solid rgba(33,37,41,0.68)' }}
        >
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
