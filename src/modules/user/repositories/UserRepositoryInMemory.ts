import { User } from "../entities/User";
import { UserRepository } from "./UserReposiory";

export class UserRepositoryInMemory implements UserRepository {

  public users: User[] = []

  async create(user: User): Promise<void> {
    this.users.push(user)
  }
}