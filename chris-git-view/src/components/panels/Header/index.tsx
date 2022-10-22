import { BiGitRepoForked } from 'react-icons/bi';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>
        Chris Git View <BiGitRepoForked />{' '}
      </h1>
    </header>
  );
};
export default Header;
