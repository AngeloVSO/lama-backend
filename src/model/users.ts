enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export type SignupUser = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  role?: USER_ROLES;
  id: string;
};

export type SignupUserDTO = {
  name: any;
  nickname: any;
  email: any;
  password: any;
  role?: any;
};

export type LoginDTO = {
  login: any;
  password: any;
};

export type AuthenticationData = {
  id: string;
  role: USER_ROLES;
};

export const toUserRoles = (value : any)=>{
  switch (String(value).toLowerCase()){
    case 'admin':
      return USER_ROLES.ADMIN
    case 'normal':
      return USER_ROLES.NORMAL
    default:
      return USER_ROLES.NORMAL
  }
}
