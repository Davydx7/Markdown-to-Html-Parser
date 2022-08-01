import { faker } from '@faker-js/faker';
import { addHours } from 'date-fns/esm';

// Mocked flight Data

export type FlightType = {
  id: string;
  name: string;
  from: string;
  to: string;
  departureDate: string /* Date */;
  arrivalDate: string;
  price: number;
};

const closestDepature: Date = addHours(new Date(), 12);
const farthestDepature: Date = addHours(new Date(), 36);
const closestArrival: Date = addHours(new Date(), 48);
const farthestArrival: Date = addHours(new Date(), 72);

const flights: FlightType[] = [
  {
    id: faker.database.mongodbObjectId(),
    name: 'Chris Airways',
    from: 'Vienna',
    to: 'New York',
    departureDate: faker.date.between(closestDepature, farthestDepature).toJSON(),
    arrivalDate: faker.date.between(closestArrival, farthestArrival).toJSON(),
    price: 450.99
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Jumbo Airways',
    from: 'Vienna',
    to: 'New York',
    departureDate: faker.date.between(closestDepature, farthestDepature).toJSON(),
    arrivalDate: faker.date.between(closestArrival, farthestArrival).toJSON(),
    price: 389.99
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Ryanair',
    from: 'Madrid',
    to: 'New York',
    departureDate: faker.date.between(closestDepature, farthestDepature).toJSON(),
    arrivalDate: faker.date.between(closestArrival, farthestArrival).toJSON(),
    price: 732.49
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Lufthansa',
    from: 'Madrid',
    to: 'New York',
    departureDate: faker.date.between(closestDepature, farthestDepature).toJSON(),
    arrivalDate: faker.date.between(closestArrival, farthestArrival).toJSON(),
    price: 926.79
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'EasyJet',
    from: 'Vienna',
    to: 'Madrid',
    departureDate: faker.date.between(closestDepature, farthestDepature).toJSON(),
    arrivalDate: faker.date.between(closestArrival, farthestArrival).toJSON(),
    price: 523.99
  }
];

export default flights;
