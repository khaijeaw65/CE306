import { SkillTag } from "../../SkillTag/SkillTag";
import type { UserSkillProps } from "./UserSkill.types";

export const UserSkillList = ({ skills }: UserSkillProps) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
      {skills.map((skill) => (
        <SkillTag key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};
