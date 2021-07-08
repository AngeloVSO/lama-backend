import { sign, verify } from "jsonwebtoken";
import { AuthenticationData } from "../model/users";

class TokenGenerator {
  public generate = (payload: AuthenticationData): string => {
    const newToken = sign(payload, process.env.JWT_KEY!, {
      expiresIn: "30min",
    });
    return newToken;
  };

  public tokenVerify = (token: string) => {
    return verify(token, process.env.JWT_KEY!) as AuthenticationData;
  };
}

export default new TokenGenerator()