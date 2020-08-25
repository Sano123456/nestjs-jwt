import { Injectable } from '@nestjs/common';
export type User = any;


@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor(
        //private readonly authService: AuthService,
    ) {
        this.users = [
          {
            id: 1,
            email: 'test@test.com',
            password: 'changeme',
          },
          {
            id: 2,
            username: 'chris',
            password: 'secret',
          },
          {
            id: 3,
            username: 'maria',
            password: 'guess',
          },
        ];
      }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
