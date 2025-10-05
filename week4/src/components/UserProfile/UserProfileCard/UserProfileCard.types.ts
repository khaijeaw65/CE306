import type { UserData } from "./UserData.types";

export interface UserProfileCardProps {
  user: UserData,
  onViewDetails: (userId: UserData['id']) => void;
}
