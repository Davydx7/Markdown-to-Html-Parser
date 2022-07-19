import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import './logout.scss';

const Logout = () => (
  <Layout>
    <h1>Logging out</h1>
    <p>Are you sure you want to log out?</p>
    <Button goTo="/" type="button" group="secondary">
      Log out
    </Button>
    <Button goTo={-1} type="button" group="primary">
      Go Back
    </Button>
  </Layout>
);
export default Logout;
