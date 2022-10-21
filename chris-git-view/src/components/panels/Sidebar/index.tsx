import './sidebar.scss';

const Sidebar = () => {
  const screens = [
    'Source',
    'Conmits',
    'Branches',
    'Pull Requests',
    'settings',
    'Diff Viewer',
    'Graph Viewer'
  ];

  return (
    <nav className="sidebar">
      <h1>Git View</h1>
      <ul>
        {screens.map((screen) => (
          <li key={screen} className="sidebar__item">
            {screen}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Sidebar;
