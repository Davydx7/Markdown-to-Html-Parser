import { faker } from '@faker-js/faker';

const users = [
  {
    id: faker.database.mongodbObjectId(),
    FirstName: 'John',
    LastName: 'Hathaway',
    password: '1234567890',
    email: 'you@example.com'
  }
];

export default users;
