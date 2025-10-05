import type { UserInfoProps } from "./UserInfo.types";
import styles from "./UserInfo.module.css";

export const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className={styles["user-info"]}>
      <img
        src={user.avatarUrl}
        alt={`${user.name}'s avatar`}
        className={styles["user-profile-img"]}
      />
      <div className={styles['user-information']}>
        <h2 className={styles['user-name']}>{user.name}</h2>
        <p className={styles['user-email']}>{user.email}</p>
        <div className={styles['user-info-status']}>
          <div className={user.isOnline ? styles['user-online-status-indicator'] : styles['user-offline-status-indicator']}></div>
          <p className={styles['user-online-status']}>{user.isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
};
