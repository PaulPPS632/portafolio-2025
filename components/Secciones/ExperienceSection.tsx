import { EXPERIENCES } from "@/static/Experiences";
import CardExperience from "../Cards/CardExperience";

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="relative flex flex-col bg-back max-w-7xl mx-auto px-4 sm:px-6"
    >
      <h2 className="sticky top-14 z-10 text-2xl sm:text-5xl font-orbitron font-bold text-titles text-center my-5 sm:my-10 mx-auto">
        EXPERIENCIA
      </h2>

      <div className="relative w-full flex flex-col items-center justify-center gap-16 sm:gap-28 pb-24 sm:pb-32">
        {EXPERIENCES.map((experience, index) => (
          <CardExperience
            key={experience.id ?? index}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
