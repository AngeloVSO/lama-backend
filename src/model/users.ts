enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export type SignupUser = {
  name: string;
  email: string;
  password: string;
  role?: USER_ROLES;
  id: string;
};

export type LoginDTO = {
  login: any;
  password: any;
};

export type AuthenticationData = {
  id: string;
  role: USER_ROLES;
};
