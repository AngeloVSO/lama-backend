import { SignupUser } from "../../model/users";
import Database from "../Database";

class UserDatabase extends Database {
  protected tableName: string = "fullstack_users";

  public async createUser(user: SignupUser): Promise<void> {
    try {
      await Database.connection.insert(user).into(this.tableName);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

export default new UserDatabase();
