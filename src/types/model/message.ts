import { TUser } from "./user";

export type TMessage = {
  type: "text" | "image";
  content: string;
  id: string;
  sender: TUser;
};
