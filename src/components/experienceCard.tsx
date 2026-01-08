import type { ExperienceData } from "../data/experience.data";

export const ExperienceCard = ({
	company,
	role,
	period,
	title,
	description,
	responsibilities,
	tech,
}: ExperienceData) => {
	return (
		<>
			<article>
				<h3>{role}</h3>
				<span>
					{company} - {period}
				</span>
				<h4>{title}</h4>
				<p>{description}</p>
				<ul>
					{responsibilities.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<ol>
					{tech.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ol>
			</article>
		</>
	);
};
