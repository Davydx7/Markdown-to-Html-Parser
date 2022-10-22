import { NavLink } from 'react-router-dom';
import './sidebar.scss';

const Sidebar: React.FC = () => {
  const screens = [
    ['gitclient', 'Git Client'],
    ['files', 'Files'],
    ['commits', 'Commits'],
    ['branches', 'Branches'],
    ['pullrequests', 'Pull Requests'],
    ['diffview', 'Diff View'],
    ['graphView', 'Graph View'],
    ['settings', 'Settings']
  ];

  return (
    <nav className="sidebar">
      <h1>Git View</h1>
      <ul>
        {screens.map((screen) => (
          <li key={screen[0]}>
            <NavLink to={screen[0]} className={({ isActive }) => (isActive ? 'isActive' : '')}>
              {screen[1]}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Sidebar;
