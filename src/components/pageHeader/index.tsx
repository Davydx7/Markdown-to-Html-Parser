import { ReactNode } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import './pageHeader.scss';

type Props = {
  heading: string | ReactNode;
  homeButton?: boolean;
  backButton?: boolean;
};

// page header for indiviadual page
const PageHeader: React.FC<Props> = ({ heading, homeButton = false, backButton = false }) => {
  const navigate = useNavigate();

  return (
    <div className="pageHeader">
      <div className="icons">
        {backButton && (
          <BiArrowBack
            className="goBack"
            title="go back"
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
        {homeButton && (
          <FaHome
            title="home"
            onClick={() => {
              navigate('/');
            }}
          />
        )}
      </div>
      <h3 className="title">{heading}</h3>
    </div>
  );
};

export default PageHeader;
