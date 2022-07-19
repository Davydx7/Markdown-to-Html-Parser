import { addHours } from 'date-fns/esm';

export type FlightType = {
  id: string;
  name: string;
  from: string;
  to: string;
  departureDate: string /* Date */;
  arrivalDate: string;
  price: number;
};

const date: string = new Date().toJSON();
const arrival: string = addHours(new Date(), 12).toJSON();

const flights: FlightType[] = [
  {
    id: '1',
    name: 'Chris Airways',
    from: 'Vienna',
    to: 'New York',
    departureDate: date,
    arrivalDate: arrival,
    price: 450.99
  },
  {
    id: '2',
    name: 'Jumbo Airways',
    from: 'Vienna',
    to: 'New York',
    departureDate: date,
    arrivalDate: arrival,
    price: 389.99
  },
  {
    id: '3',
    name: 'Ryanair',
    from: 'Madrid',
    to: 'New York',
    departureDate: date,
    arrivalDate: arrival,
    price: 732.49
  },
  {
    id: '4',
    name: 'Lufthansa',
    from: 'Madrid',
    to: 'New York',
    departureDate: date,
    arrivalDate: arrival,
    price: 926.79
  },
  {
    id: '5',
    name: 'EasyJet',
    from: 'Vienna',
    to: 'Madrid',
    departureDate: date,
    arrivalDate: arrival,
    price: 523.99
  },
  {
    id: '6',
    name: 'EasyJet',
    from: 'Vienna',
    to: 'Madrid',
    departureDate: date,
    arrivalDate: arrival,
    price: 523.99
  }
  // {
  //   id: '7',
  //   name: 'Chris Airways',
  //   from: 'New york',
  //   to: 'Madrid',
  //   departureDate: date,
  //   arrivalDate: arrival,
  //   price: 450.99
  // },
  // {
  //   id: '8',
  //   name: 'Jumbo Airways',
  //   from: 'New york',
  //   to: 'Madrid',
  //   departureDate: date,
  //   arrivalDate: arrival,
  //   price: 389.99
  // },
  // {
  //   id: '9',
  //   name: 'Ryanair',
  //   from: 'New york',
  //   to: 'Vienna',
  //   departureDate: date,
  //   arrivalDate: arrival,
  //   price: 732.49
  // },
  // {
  //   id: '10',
  //   name: 'Lufthansa',
  //   from: 'New york',
  //   to: 'Vienna',
  //   departureDate: date,
  //   arrivalDate: arrival,
  //   price: 926.79
  // },
  // {
  //   id: '11',
  //   name: 'EasyJet',
  //   from: 'Madrid',
  //   to: 'Vienna',
  //   departureDate: date,
  //   arrivalDate: arrival,
  //   price: 523.99
  // },
  // {
  //   id: '12',
  //   name: 'EasyJet',
  //   from: 'Madrid',
  //   to: 'Vienna',
  //   departureDate: date,
  //   arrivalDate: arrival,
  //   price: 523.99
  // },
  // {
  //   id: '13',
  //   name: 'EasyJet',
  //   from: 'Vienna',
  //   to: 'Madrid',
  //   departureDate: date,
  //   arrivalDate: arrival,
  //   price: 523.99
  // },
  // {
  //   id: '14',
  //   name: 'Chris Airways',
  //   from: 'New york',
  //   to: 'Madrid',
  //   departureDate: date,
  //   arrivalDate: arrival,
  //   price: 450.99
  // },
  // {
  //   id: '15',
  //   name: 'Lufthansa',
  //   from: 'New york',
  //   to: 'Vienna',
  //   departureDate: date,
  //   arrivalDate: arrival,
  //   price: 926.79
  // },
  // {
  //   id: '16',
  //   name: 'EasyJet',
  //   from: 'Madrid',
  //   to: 'Vienna',
  //   departureDate: date,
  //   arrivalDate: arrival,
  //   price: 523.99
  // }
];

export default flights;
