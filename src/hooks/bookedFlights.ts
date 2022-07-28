import { useQuery } from '@tanstack/react-query';
import useBookedFlights from '../stores/clientStores/bookedFlights';
import { FlightType } from '../stores/server/serverData/flights';

// This Data will be gotten from server later;
// Extract useQuery hook for mannaging Request
// simulating fetch with a static store created using zustand

function useFetchBookedFlights() {
  const bookedFlights = useBookedFlights((state) => state.bookedFlights);

  return useQuery<FlightType[], Error>(
    ['bookedFlights'],

    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(bookedFlights), 1500);
      }),
    {
      staleTime: Infinity,
      cacheTime: 0,
      refetchOnMount: true
    }
  );
}

export default useFetchBookedFlights;
