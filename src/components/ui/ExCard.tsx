import { useState } from "react";
import { experience, type ExperienceData } from "../../data/experience.data";

export const ExCard = () => {
  return (
    <>
      {experience.map((exp) => (
        <div key={exp.id} className="experienceItem">
          <div className="companyHeader">
            <h2 className="companyTitle">{exp.company}</h2>
          </div>
          <p className="description">{exp.description}</p>
          <ul>
            {exp.tech.map((techs, index) => (
              <li key={index}>
                {Array.isArray(techs) ? (
                  <>
                    <span
                      className="techSvg"
                      dangerouslySetInnerHTML={{ __html: techs[1] }}
                    />
                    <span>{techs[0]}</span>
                  </>
                ) : (
                  techs
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
