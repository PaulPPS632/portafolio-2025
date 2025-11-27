import { EXPERIENCES } from "@/static/Experiences";
import CardExperience from "../Cards/CardExperience";

export default function ExperienceSection() {
  return (
    <section className=" relative flex flex-col bg-back max-w-7xl mx-auto">
      <h2 className="sticky top-14 text-2xl sm:text-5xl font-orbitron font-bold text-titles text-center my-5 sm:my-10 mx-auto">
        EXPERIENCIA
      </h2>

      <div className="relative w-full flex flex-col items-center justify-center gap-32">
        {EXPERIENCES.map((experience, index) => (
          <CardExperience key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
}
