import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importing useParams to access route parameters
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for programmatic navigation
import './EditProfile.css';
import { useUserContext } from './UserContext';

const EditProfile = () => {
  const { users, updateUser } = useUserContext(); // Accessing user data and update function from context
  const { userId } = useParams(); // Accessing the 'userId' parameter from the URL
  const navigate = useNavigate(); // Setting up programmatic navigation
  const editedUser = users[userId]; // Finding the user to edit based on 'userId' parameter
   
  const [updatedUser, setUpdatedUser] = useState(editedUser); // Initializing state with the user's data
  console.log("capturedUser:",updatedUser)//here particular edit user is captured

  const handleInputChange = (e) => {
    // Handling input changes and updating the 'updatedUser' state
    const { name, value } = e.target;
    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Function to save the updated user data
    alert("Details are modified"); // Showing an alert message
    updateUser(Number(userId), updatedUser); // Calling the 'updateUser' function from context to update the user data
    console.log("Edited User:", updatedUser); // Logging the edited user data
    navigate('/profile'); // Using 'navigate' to navigate back to the '/profile' route
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-profile-title">Edit Profile</h2>      
      <input type="text" name="name"  placeholder="Name" value={updatedUser.name} onChange={handleInputChange}/>
      <input type="text" name="email"  placeholder="Email" value={updatedUser.email} onChange={handleInputChange}/>    
      <br />     
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditProfile;
