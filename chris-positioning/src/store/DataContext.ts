import React, { createContext, useMemo, useState } from 'react';

const DataContext = createContext(null);

const DataProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const teamMembersNames = ['John', 'Mary', 'Jason', 'David'];

  const [sharing, setSharing] = useState([]);
  const [help, setHelp] = useState([]);
  const [pairing, setPairing] = useState(teamMembersNames);

  const store = useMemo(() => {
    share: [sharing, setSharing];
    help: [help, setHelp];
    pairing: [pairing, setPairing];
  }, [sharing, help, pairing]);

  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
};

export default DataProvider;