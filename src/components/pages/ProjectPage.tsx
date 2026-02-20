import { projects } from "../../data/projects.data";
import { useNavigate, useParams, useLocation } from "react-router";
import { useEffect } from "react";

export const ProjectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const currentIndex = parseInt(id || "0", 10);
  const currentProject = projects[currentIndex];
  const sectionId =
    (location.state as { sectionId: string } | null)?.sectionId || "projects";

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    setTimeout(() => {
      const scrollContainer = document.getElementById("root");
      if (scrollContainer) {
        scrollContainer.scrollTop = 0;
      }
    }, 100);
  }, [currentIndex]);

  if (!currentProject) {
    return (
      <>
        <button onClick={handleBack} className="backButton">
          ← Back
        </button>
        <div className="experiencePage">
          <p>Project not found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <button onClick={handleBack} className="backButton">
        ← Back
      </button>
      <div className="experiencePage">
        <div className="experienceCard">
          <h1 className="companyExTitle">{currentProject.title}</h1>

          <h5 className="description">
            <p className="descriptionTitle">Description</p>
            {currentProject.description}
          </h5>
          <div className="experienceTechnologies">
            <p className="techTitle">Technologies Used:</p>
            <div className="usedTechnologies">
              {currentProject.tech?.map((tech, techIndex) =>
                Array.isArray(tech) && tech.length === 2 ? (
                  <span
                    key={techIndex}
                    className="techSvg"
                    dangerouslySetInnerHTML={{ __html: tech[1] }}
                  />
                ) : null,
              )}
            </div>
          </div>
          <div className="projectLink">
            <a href={currentProject.link}>Project here</a>
          </div>
        </div>
      </div>
    </>
  );
};
