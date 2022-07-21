import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import useLoggedUser from '../../stores/clientStores/loggedUser';
import './logout.scss';

const Logout = () => {
  const navigate = useNavigate();

  const setLoggedUser = useLoggedUser((state) => state.setLoggedUser);

  const handleClick = () => {
    localStorage.removeItem('loggedUser');
    setLoggedUser(undefined);
    navigate('/', { replace: true });
  };

  return (
    <Layout>
      <h1 className="title">Logging out</h1>
      <p>Are you sure you want to log out?</p>
      <Button onClick={handleClick} type="button" group="secondary">
        Log out
      </Button>
      <Button goTo={-1} type="button" group="primary">
        Go Back
      </Button>
    </Layout>
  );
};
export default Logout;
