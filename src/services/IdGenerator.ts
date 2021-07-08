import { v4 as uuid } from "uuid";

export class IdGenerator {
  public generate = (): string => {
    return uuid();
  };
}

export default new IdGenerator();
