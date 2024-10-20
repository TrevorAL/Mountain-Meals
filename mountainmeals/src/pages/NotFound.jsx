// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import { Button } from 'antd';

const NotFound = () => (
  <div className="notfound-container">
    <h1>404 - Page Not Found</h1>
    <Link to="/">
      <Button type="primary">Go Home</Button>
    </Link>
  </div>
);

export default NotFound;
