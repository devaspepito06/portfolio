import { Card } from "../ui/Card";
import { projects } from "../../data/projects.data";

export function Projects() {
  return (
    <>
      <section className="projectsSection">
        <div className="projectsContainer">
          <h1 className="title">Projects Section</h1>
          <div className="projects">
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech.map((t) =>
                  Array.isArray(t) ? { label: t[0], svg: t[1] } : t,
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
