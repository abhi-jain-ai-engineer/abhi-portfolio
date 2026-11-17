import { EntranceScene } from "@/components/sections/EntranceScene";
import { AboutScene } from "@/components/sections/AboutScene";
import { SkillsScene } from "@/components/sections/SkillsScene";
import { EducationScene } from "@/components/sections/EducationScene";
import { ProjectsScene } from "@/components/sections/ProjectsScene";
import { AchievementsScene } from "@/components/sections/AchievementsScene";
import { ContactScene } from "@/components/sections/ContactScene";
import { StickyNav } from "@/components/ui/StickyNav";

export default function Home() {
  return (
    <main>
      <StickyNav />
      <EntranceScene />
      <div id="nav-trigger" />
      <AboutScene />
      <SkillsScene />
      <EducationScene />
      <ProjectsScene />
      <AchievementsScene />
      <ContactScene />
    </main>
  );
}
