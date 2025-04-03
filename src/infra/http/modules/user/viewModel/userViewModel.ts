import { User } from 'src/modules/user/entities/User';

export class UserViewModel {
  static toView({ id, createdAt, email, name, password }: User) {
    return {
      id,
      createdAt,
      email,
      name,
      password,
    };
  }
}
