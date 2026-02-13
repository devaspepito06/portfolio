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
      <a href="/experiencePage" className="cardExternalIcon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
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
