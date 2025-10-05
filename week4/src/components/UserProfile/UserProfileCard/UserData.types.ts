export interface UserSkill {
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced'; 
}

export interface UserData {
  id: string | number;
  name: string;
  avatarUrl?: string;
  email: string;
  isOnline: boolean;
  skills: UserSkill[];
}
