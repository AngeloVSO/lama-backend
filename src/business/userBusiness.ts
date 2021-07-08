import UserDatabase from "../database/User/userDatabase";
import { CustomError } from "../error/customError";
import { SignupUser, SignupUserDTO, toUserRoles } from "../model/users";
import TokenGenerator from "../services/Authenticator";
import HashGenerator from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import ValidateEmail from "../services/ValidateEmail";

class UserBusiness {
  public async signup(signupInput: SignupUserDTO): Promise<string> {
    try {
      if (
        !signupInput.name ||
        !signupInput.nickname ||
        !signupInput.email ||
        !signupInput.password ||
        !signupInput.role
      ) {
        throw new CustomError(422, "Missing input");
      }

      if (
        typeof signupInput.name !== "string" ||
        typeof signupInput.nickname !== "string" ||
        !ValidateEmail(signupInput.email) ||
        typeof signupInput.password !== "string" ||
        typeof signupInput.role !== "string"
      ) {
        throw new CustomError(400, "All fields must be 'string'.");
      }

      if (signupInput.email.indexOf("@") === -1) {
        throw new CustomError(422, "Invalid email");
      }

      if (signupInput.password.length < 6) {
        throw new CustomError(422, "Invalid password");
      }

      const newUser: SignupUser = {
        ...signupInput,
        role: toUserRoles(signupInput.role),
        id: IdGenerator.generate(),
        password: HashGenerator.createHash(signupInput.password),
      };

      await UserDatabase.createUser(newUser);

      const accessToken = TokenGenerator.generate({
        id: newUser.id,
        role: newUser.role!,
      });
      
      return accessToken;
    } catch (error) {
      if (error.sqlMessage?.includes("Duplicate entry")) {
        throw new CustomError(409, "Email already in use");
      }

      throw new CustomError(error.statusCode, error.message);
    }
  }
}

export default new UserBusiness();
