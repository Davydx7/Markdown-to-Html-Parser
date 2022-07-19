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

const useUserDetails = create<FlightDetailsStore>((set) => ({
  flightDetails: {},
  setFlightDetails: (flightDetails: FlightDetails): void =>
    set((state) => ({
      flightDetails
    }))
}));

export default useUserDetails;
