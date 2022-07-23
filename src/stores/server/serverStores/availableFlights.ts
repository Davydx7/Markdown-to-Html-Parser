import create, { State } from 'zustand';
import flights, { FlightType } from '../serverData/flights';

//  Flight Data original

interface flightStore extends State {
  availableFlights: FlightType[];
  getAvailableFlights: () => FlightType[];
}

const useFlights = create<flightStore>((set, get) => ({
  availableFlights: flights,
  getAvailableFlights: () => get().availableFlights
}));

export default useFlights;

// Flight Detaiils  LETT, BACKEND LOGIC

// export type FlightDetails = {
//   from: string;
//   to: string;
//   departureDate: string;
// };

// interface FlightDetailsStore {
//   flightDetails: FlightDetails | {};
//   setFlightDetails: (flightDetails: FlightDetails) => void;
// }

// export const useFlightDetails = create<FlightDetailsStore>((set) => ({
//   flightDetails: {},
//   setFlightDetails: (flightDetails: FlightDetails): void =>
//     set((state) => ({
//       flightDetails
//     }))
// }));
