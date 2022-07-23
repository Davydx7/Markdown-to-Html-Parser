import { addHours } from 'date-fns';
import create, { State } from 'zustand';

type BookedFlightItem = {
  id: string;
  name: string;
  from: string;
  to: string;
  departureDate: string /* Date */;
  arrivalDate: string;
  price: number;
};

interface BookedFlightsStore extends State {
  bookedFlights: BookedFlightItem[];
  addBookedFlight: (bookedFlight: BookedFlightItem) => void;
  removeBookedFlight: (id: string) => void;
}

const useBookedFlights = create<BookedFlightsStore>((set, get) => ({
  bookedFlights: [
    {
      id: '3',
      name: 'Ryanair Airways',
      from: 'Madrid',
      to: 'New York',
      departureDate: new Date().toJSON(),
      arrivalDate: addHours(new Date(), 12).toJSON(),
      price: 732.49
    },
    {
      id: '4',
      name: 'Lufthansa Airways',
      from: 'Madrid',
      to: 'New York',
      departureDate: new Date().toJSON(),
      arrivalDate: addHours(new Date(), 12).toJSON(),
      price: 926.79
    }
  ],
  addBookedFlight: (bookedFlight: BookedFlightItem) =>
    set((state) => ({
      bookedFlights: [...state.bookedFlights, bookedFlight]
    })),
  // getBookedFlights: () => get().bookedFlights,
  removeBookedFlight: (id: string) =>
    set((state) => ({
      bookedFlights: state.bookedFlights.filter((bookedFlight) => bookedFlight.id !== id)
    }))
}));

export default useBookedFlights;
