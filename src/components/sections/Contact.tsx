import { Link } from "react-router";
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
              <ul>
                <li>
                  <Link to={mailLink}>
                    <Gmail width={30} height={30} />
                  </Link>
                </li>
                <li>
                  <Link to={linkedinLink}>
                    <LinkedIn width={30} height={30} />
                  </Link>
                </li>
                <li>
                  <Link to={igLink}>
                    <Instagram width={30} height={30} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
