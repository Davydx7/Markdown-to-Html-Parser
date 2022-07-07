import './layout.scss';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => <div className="layout">{children}</div>;

export default Layout;
