import { Card } from "../ui/Card";
import { experience } from "../../data/experience.data";

export const Experience = () => {
  return (
    <section className="experienceSection" id="experience">
      <div className="experienceContainer">
        <h1 className="title">Experience</h1>
        <div className="experienceContainerList">
          {experience.map((exp, index) => (
            <Card
              key={index}
              company={exp.company}
              description={exp.description}
              tech={exp.tech.map((t) =>
                Array.isArray(t) ? { label: t[0], svg: t[1] } : t,
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
