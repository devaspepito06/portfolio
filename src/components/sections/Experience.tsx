import { useState, useRef, useEffect } from "react";
// import { experience, type ExperienceData } from "../../data/experience.data";

export const Experience = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sections = [
    { id: "title", label: "Experience" },
    { id: "andesBPO", label: "AndesBPO" },
  ];

  // Detectar scroll manual y actualizar el indicador
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Limpiar timeout anterior
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Debounce para evitar actualizaciones excesivas
      scrollTimeoutRef.current = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;
        const scrollPercentage =
          scrollLeft / (container.scrollWidth - containerWidth);

        // Calcular qué sección es la más visible
        const newSection = Math.round(scrollPercentage * (sections.length - 1));
        setCurrentSection(
          Math.max(0, Math.min(newSection, sections.length - 1))
        );
      }, 100);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sections.length]);

  const handleNavigation = (direction: "left" | "right") => {
    let newSection = currentSection;

    if (direction === "right") {
      newSection = Math.min(currentSection + 1, sections.length - 1);
    } else {
      newSection = Math.max(currentSection - 1, 0);
    }

    setCurrentSection(newSection);

    // Scroll al contenedor correspondiente
    if (containerRef.current) {
      const sectionElement = containerRef.current.children[
        newSection
      ] as HTMLElement;
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <>
      <section className="experienceSection">
        <button
          className="navArrow navArrowLeft"
          onClick={() => handleNavigation("left")}
          aria-label="Sección anterior"
          disabled={currentSection === 0}
        >
          ←
        </button>

        <div className="experienceContainer" ref={containerRef}>
          <div className="title">
            <h2>Experience</h2>
          </div>
          <div className="andesBPO">
            <h2>AndesBPO</h2>
          </div>
        </div>

        <button
          className="navArrow navArrowRight"
          onClick={() => handleNavigation("right")}
          aria-label="Siguiente sección"
          disabled={currentSection === sections.length - 1}
        >
          →
        </button>

        <div className="sectionIndicators">
          {sections.map((section, index) => (
            <button
              key={section.id}
              className={`indicator ${
                index === currentSection ? "active" : ""
              }`}
              onClick={() => {
                setCurrentSection(index);
                if (containerRef.current) {
                  const sectionElement = containerRef.current.children[
                    index
                  ] as HTMLElement;
                  if (sectionElement) {
                    sectionElement.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "center",
                    });
                  }
                }
              }}
              aria-label={section.label}
              title={section.label}
            />
          ))}
        </div>
      </section>
    </>
  );
};
