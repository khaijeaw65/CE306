import styles from './UserProfileCard.module.css';
import { UserInfo } from "./UserInfo/UserInfo";
import type { UserProfileCardProps } from "./UserProfileCard.types";
import { UserSkillList } from "./UserSkill/UserSkill";

export const UserProfileCard = ({
  user,
  onViewDetails,
}: UserProfileCardProps) => {
  const viewDetailOnClick = () => {
    onViewDetails(user.id);
  };
  return (
    <div className={styles['user-profile-card']}>
      <UserInfo user={user}  />
      <h3 style={{ fontSize: '16px', color: 'gray'}}>Skills:</h3>
      <UserSkillList skills={user.skills} />
      <button className={styles['view-details-button']} onClick={viewDetailOnClick}>View Details</button>
    </div>
  );
};
