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

  public async getUserByEmailOrNickname(input: string):Promise<void> {
    try {
      const [result] = await Database.connection(this.tableName).where({nickname: input}).orWhere({email: input});
      return result
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

export default new UserDatabase();
