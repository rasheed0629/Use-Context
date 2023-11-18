import React, { useState } from 'react';
import { useUserContext } from './UserContext';
import { Link } from 'react-router-dom';
import './AddProfile.css'; // Import the CSS file

const AddProfile = () => {
  const { users, setUsers } = useUserContext();
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleAddUser = () => {
    if (!newUser.name == "" && !newUser.email == "") {
      setUsers([...users, newUser]);
      console.log(newUser);
      setNewUser({ name: '', email: '', });
      alert("Details added")
    }
    else {
      alert("Please add details");
    }
  };

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <div className="edit-profile-container">
      <form onSubmit={submitHandler}>
        <h2 className="edit-profile-title">Add User</h2>
        <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleInputChange} className="form-input" />
        <input type="text" name="email" placeholder="Email" value={newUser.email} onChange={handleInputChange} className="form-input" />
        <br />
        <button onClick={handleAddUser} className="add-button">Add</button><br />
      </form>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/profile">UserProfile</Link>
      </div>
    </div>
  );
};

export default AddProfile;
