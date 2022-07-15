import create from 'zustand';

import flights, { flightType } from './ServerData/Flights';

interface flightStore {
  availableFlights: flightType[];
  setAvailableFlights: () => void;
  getAvailableFlights: () => flightType[];
}

const useFlights = create<flightStore>((set, get) => ({
  availableFlights: flights,
  setAvailableFlights: () => set((state) => ({ ...state, availabeFlights: flights })),
  getAvailableFlights: () => get().availableFlights
}));

export default useFlights;
