import type { UserSkill } from "../UserProfileCard/UserData.types";
import styles from "./SkillTag.module.css";

const skillBackgroundColors: Record<NonNullable<UserSkill["level"]>, string> & {
  none: string;
} = {
  Beginner: styles["beginner-level-skill"],
  Intermediate: styles["intermediate-level-skill"],
  Advanced: styles["advanced-level-skill"],
  none: styles["no-level-skill"],
};

export const SkillTag: React.FC<UserSkill> = ({ name, level }) => {
  return (
    <span
      className={`${skillBackgroundColors[level ?? "none"]} ${
        styles["skill-tag"]
      }`}
    >
      {name}{" "}
      <span style={{ fontStyle: "italic", fontSize: '12px' }}>{level ? `(${level})` : ""}</span>
    </span>
  );
};
