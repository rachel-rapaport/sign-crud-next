import { UserSchemaProps } from "./userSchemaProps";

export interface UserStore{
    curentUser:Partial<UserSchemaProps>;
    addUser: (user: Partial<UserSchemaProps>) => void;
}