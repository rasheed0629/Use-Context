import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from './UserContext';
import './Dashboard.css';

const Dashboard = () => {
  const { users } = useUserContext();

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to the Dashboard</h2>
      <div className="dashboard-content">
        <p>This is your dashboard where you can manage user profiles.</p>
        <p>Currently, there are {users.length} user profiles.</p>
      </div>
      <div className="dashboard-links">
        <Link to="/profile">View Profiles</Link>
        {' | '}
        <Link to="/add">Add Profile</Link>
      </div>
    </div>
  );
};

export default Dashboard;
