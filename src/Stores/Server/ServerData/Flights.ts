export type FlightType = {
  id: string;
  name: string;
  from: string;
  to: string;
  date: string /* Date */;
  time: string /* Date */;
  price: number;
};

const flights: FlightType[] = [
  {
    id: '1',
    name: 'Chris Airways',
    from: 'Vienna',
    to: 'New York',
    date: 'July 22  ',
    time: '15:30 UTC',
    price: 450.99
  },
  {
    id: '2',
    name: 'Jumbo Airways',
    from: 'Vienna',
    to: 'New York',
    date: 'July 24  ',
    time: '13:00 UTC',
    price: 389.99
  },
  {
    id: '3',
    name: 'Ryanair',
    from: 'Madrid',
    to: 'New York',
    date: 'July 25  ',
    time: '11:00 UTC',
    price: 732.49
  },
  {
    id: '4',
    name: 'Lufthansa',
    from: 'Madrid',
    to: 'New York',
    date: 'July 26  ',
    time: '16:00 UTC',
    price: 926.79
  },
  {
    id: '5',
    name: 'EasyJet',
    from: 'Vienna',
    to: 'Madrid',
    date: 'July 21  ',
    time: '15:40 UTC',
    price: 523.99
  },
  {
    id: '6',
    name: 'EasyJet',
    from: 'Vienna',
    to: 'Madrid',
    date: 'July 21  ',
    time: '15:40 UTC',
    price: 523.99
  }
  // {
  //   id: '7',
  //   name: 'Chris Airways',
  //   from: 'New york',
  //   to: 'Madrid',
  //   date: 'July 22  ',
  //   time: '15:30 UTC',
  //   price: 450.99
  // },
  // {
  //   id: '8',
  //   name: 'Jumbo Airways',
  //   from: 'New york',
  //   to: 'Madrid',
  //   date: 'July 24  ',
  //   time: '13:00 UTC',
  //   price: 389.99
  // },
  // {
  //   id: '9',
  //   name: 'Ryanair',
  //   from: 'New york',
  //   to: 'Vienna',
  //   date: 'July 25  ',
  //   time: '11:00 UTC',
  //   price: 732.49
  // },
  // {
  //   id: '10',
  //   name: 'Lufthansa',
  //   from: 'New york',
  //   to: 'Vienna',
  //   date: 'July 26  ',
  //   time: '16:00 UTC',
  //   price: 926.79
  // },
  // {
  //   id: '11',
  //   name: 'EasyJet',
  //   from: 'Madrid',
  //   to: 'Vienna',
  //   date: 'July 21  ',
  //   time: '15:40 UTC',
  //   price: 523.99
  // },
  // {
  //   id: '12',
  //   name: 'EasyJet',
  //   from: 'Madrid',
  //   to: 'Vienna',
  //   date: 'July 21  ',
  //   time: '15:40 UTC',
  //   price: 523.99
  // },
  // {
  //   id: '13',
  //   name: 'EasyJet',
  //   from: 'Vienna',
  //   to: 'Madrid',
  //   date: 'July 21  ',
  //   time: '15:40 UTC',
  //   price: 523.99
  // },
  // {
  //   id: '14',
  //   name: 'Chris Airways',
  //   from: 'New york',
  //   to: 'Madrid',
  //   date: 'July 22  ',
  //   time: '15:30 UTC',
  //   price: 450.99
  // },
  // {
  //   id: '15',
  //   name: 'Lufthansa',
  //   from: 'New york',
  //   to: 'Vienna',
  //   date: 'July 26  ',
  //   time: '16:00 UTC',
  //   price: 926.79
  // },
  // {
  //   id: '16',
  //   name: 'EasyJet',
  //   from: 'Madrid',
  //   to: 'Vienna',
  //   date: 'July 21  ',
  //   time: '15:40 UTC',
  //   price: 523.99
  // }
];

export default flights;
