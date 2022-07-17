import create from 'zustand';
import flights, { FlightType } from '../serverData/flights';

//  Flight Data original

interface flightStore {
  availableFlights: FlightType[];
  setAvailableFlights: () => void;
  getAvailableFlights: () => FlightType[];
}

export const useFlights = create<flightStore>((set, get) => ({
  availableFlights: flights,
  setAvailableFlights: () => set((state) => ({ ...state, availabeFlights: flights })),
  getAvailableFlights: () => get().availableFlights
}));

export type FlightDetails = {
  from: string;
  to: string;
  departureDate: string;
};

// Flight Detaiils

interface FlightDetailsStore {
  flightDetails: FlightDetails | {};
  setFlightDetails: (flightDetails: FlightDetails) => void;
}

export const useFlightDetails = create<FlightDetailsStore>((set) => ({
  flightDetails: {},
  setFlightDetails: (flightDetails: FlightDetails): void =>
    set((state) => ({
      flightDetails
    }))
}));
