import { Instagram, LinkedIn, Gmail } from "../ui/Svgs";

export const Contact = () => {
  const mailLink = import.meta.env.VITE_MAIL_LINK;
  const linkedinLink = import.meta.env.VITE_LIKEDIN_LINK;
  const igLink = import.meta.env.VITE_IG_LINK;

  return (
    <>
      <section className="contactSection" id="contact">
        <div className="contactContainer">
          <h1 className="contactTitle">Contact Me</h1>
          <div className="contactInfo">
            <p className="message">
              I'm available for remote work. You can contact me via direct
              message.
            </p>
            <div className="contactLinks">
              <a href={mailLink} target="_blank" rel="noopener noreferrer">
                <Gmail width={30} height={30} />
              </a>

              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <LinkedIn width={30} height={30} />
              </a>

              <a href={igLink} target="_blank" rel="noopener noreferrer">
                <Instagram width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
