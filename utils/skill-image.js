import { skills } from "../public/svg/skills";

export const skillsImage = (skill) => {
  const skillImage = skills.find((s) => s.name === skill);
  return skillImage ? skillImage.image : null;
};
