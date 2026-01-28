interface TechItem {
  label?: string;
  svg?: string;
}

interface CardProps {
  title?: string;
  company?: string;
  role?: string;
  period?: string;
  description?: string;
  tech?: (string | TechItem)[];
  image?: string;
}

export const Card = ({
  title,
  company,
  // role,
  // period,
  description,
  tech,
  // image,
}: CardProps) => {
  return (
    <div className="card">
      <div className="header">
        <h2 className="cardTitle">{company ? company : title}</h2>
      </div>
      <p className="description">{description}</p>
      <ul>
        {tech?.map((techs, index) => (
          <li key={index}>
            {typeof techs === "string" ? (
              techs
            ) : techs.svg ? (
              <>
                <span
                  className="techSvg"
                  dangerouslySetInnerHTML={{ __html: techs.svg }}
                />
                <span>{techs.label}</span>
              </>
            ) : (
              techs.label
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
