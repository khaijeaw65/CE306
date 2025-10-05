import type { UserData } from "../UserData.types";

export interface UserInfoProps {
  user: Omit<UserData, 'skills'>;
}
