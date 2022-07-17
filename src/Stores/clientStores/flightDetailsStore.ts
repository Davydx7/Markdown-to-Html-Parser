import create from 'zustand';

export type FlightDetails = {
  from: string;
  to: string;
  departureDate: string;
};

type FlightDetailsStore = {
  flightDetails: FlightDetails | {};
  setFlightDetails: (flightDetails: FlightDetails) => void;
};

const useFlightDetails = create<FlightDetailsStore>((set) => ({
  flightDetails: {},
  setFlightDetails: (flightDetails: FlightDetails) =>
    set((state) => ({
      flightDetails
    }))
}));

export default useFlightDetails;
