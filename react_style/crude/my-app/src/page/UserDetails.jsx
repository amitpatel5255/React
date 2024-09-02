import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from '@mui/material';

const UserDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUser(result.data);
  };

  return (
    <Container>
      <h2>User Details</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <Link to="/">
        <Button variant="contained" color="primary">Back to Home</Button>
      </Link>
    </Container>
  );
};

export default UserDetails;
