import { TUser } from "./user";

export type TMessage = {
  type: "text" | "image" | "audio";
  content: string;
  id: string;
  sender: TUser;
};
