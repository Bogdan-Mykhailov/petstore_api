import {User} from "./types";

export const user: User = {
  id: 1,
  username: 'bob',
  firstName: 'Bogdan',
  lastName: 'Mykhailov',
  email: 'test@email.com',
  password: '12121212',
  phone: '123123123',
  userStatus: 1,
}

export const users: User[] = [
  {
    id: 2,
    username: 'bob2',
    firstName: 'Bogdan2',
    lastName: 'Mykhailov2',
    email: 'test2@email.com',
    password: '12121222',
    phone: '123123122',
    userStatus: 1,
  },

  {
    id: 3,
    username: 'bob3',
    firstName: 'Bogdan3',
    lastName: 'Mykhailov3',
    email: 'test3@email.com',
    password: '12121213',
    phone: '123123133',
    userStatus: 1,
  }
];
