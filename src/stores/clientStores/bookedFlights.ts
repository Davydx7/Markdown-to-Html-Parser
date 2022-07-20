import create from 'zustand';

interface BookedFlightItem {
  id: string;
  name: string;
  from: string;
  to: string;
  departureDate: string /* Date */;
  arrivalDate: string;
  price: number;
}

interface BookedFlightsStore {
  bookedFlights: BookedFlightItem[];
  addBookedFlight: (bookedFlight: BookedFlightItem) => void;
  removeBookedFlight: (id: string) => void;
}

const useBookedFlights = create<BookedFlightsStore>((set, get) => ({
  bookedFlights: [],
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
