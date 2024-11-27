import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth_slice';
import { Button, Typography } from '@mui/material';

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};


export default Dashboard;
