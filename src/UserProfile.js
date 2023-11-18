import React,{useEffect}from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from './UserContext';
import './UserProfile.css';

const UserProfile = () => {
  const { users,updateUser,deleteUser } = useUserContext();
  const handleDeleteUser = (index) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(index);
    }
  };

  return (
    <div className="user-profile-container">
      <h2 className="user-profile-title">User Profiles ({users.length})</h2>
      <div className="user-links">
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/add">Add</Link>
      </div>
      <div>
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">{user.email}</p>
            <div className="linkStyle">
            <Link to={`/edit/${index}`}>Edit</Link>
            <button onClick={() => handleDeleteUser(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
