import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, TextField } from '@mui/material';

const AddEditUser = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      loadUser();
    }
  }, [id]);

  const loadUser = async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUser(result.data);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
    } else {
      await axios.post('https://jsonplaceholder.typicode.com/users', user);
    }
    navigate('/');
  };

  return (
    <Container>
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={user.name}
          onChange={onInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={user.email}
          onChange={onInputChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          {id ? 'Update User' : 'Add User'}
        </Button>
      </form>
    </Container>
  );
};

export default AddEditUser;
