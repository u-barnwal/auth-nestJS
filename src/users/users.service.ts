import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Harry',
      username: 'harry',
      password: 'expelliarmus',
    },
    {
      id: 1,
      name: 'Ron',
      username: 'ron',
      password: 'what?',
    },
    {
      id: 1,
      name: 'Hermione',
      username: 'hermione',
      password: 'no.',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
