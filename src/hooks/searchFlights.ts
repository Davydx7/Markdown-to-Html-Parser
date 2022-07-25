import { useQuery } from '@tanstack/react-query';
import { FlightType } from '../stores/server/serverData/flights';
import useFlights from '../stores/server/serverStores/availableFlights';

// This Data will be gotten from server later;
// Extract useQuery hook for mannaging Request
// simulating fetch with a static store created using zustand

function useFetchFlights() {
  const fetchFlights = useFlights((state) => state.getAvailableFlights);

  return useQuery<FlightType[], Error>(['flights'], fetchFlights, {
    staleTime: Infinity
  });
}

export default useFetchFlights;