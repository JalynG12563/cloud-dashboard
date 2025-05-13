import React, { useEffect } from 'react';
import api from '../api';

const Dashboard = () => {
  useEffect(() => {
    api.get('/aws/costs')
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

  return <div><h1>AWS Cost Dashboard</h1></div>;
};

export default Dashboard;
