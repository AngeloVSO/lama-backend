import { Request, Response } from "express";
import UserBusiness from "../business/userBusiness"
import { LoginDTO, SignupUserDTO } from "../model/users";

class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const token = await UserBusiness.signup(req.body as SignupUserDTO);

      res.status(201).send({ message: "Success", token });
    } catch (error) {
      res.status(error.statusCode || 500).send({ error: error.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const token = await UserBusiness.login(req.body as LoginDTO)

      res.status(200).send({ message: "Success", token });
    } catch (error) {
      res.status(error.statusCode || 500).send({ error: error.message });
    }
  };
}

export default new UserController();
