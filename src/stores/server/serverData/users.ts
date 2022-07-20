import { faker } from '@faker-js/faker';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

const users: User[] = [
  {
    id: faker.database.mongodbObjectId(),
    firstName: 'John',
    lastName: 'Hathaway',
    password: 'abcd1234',
    email: 'you@example.com'
  }
];

export default users;
