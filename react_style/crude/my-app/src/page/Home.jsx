import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    loadUsers();
  };

  return (
    <Container>
      <h2>Users List</h2>
      <Link to="/add">
        <Button variant="contained" color="primary">Add User</Button>
      </Link>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Link to={`/edit/${user.id}`}>
                  <Button variant="contained" color="primary">Edit</Button>
                </Link>
                <Button variant="contained" color="secondary" onClick={() => deleteUser(user.id)}>Delete</Button>
                <Link to={`/user/${user.id}`}>
                  <Button variant="contained" color="info">View</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Home;
