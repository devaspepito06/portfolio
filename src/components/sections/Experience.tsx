import { experience } from "../../data/experience.data";
import { ExperienceCard } from "../experienceCard";

export function Experience() {
	return (
		<>
			<section>
				<h2>Experience</h2>

				<div>
					{experience.map((job) => (
						<ExperienceCard key={job.id} {...job} />
					))}
				</div>
			</section>
		</>
	);
}

/*
	<h1>Full-Stack Developer at AndesBPO, La Ceja, Colombia</h1>
<h3>Some of my responsibilities include:</h3>
<ul>
<li>
Developing web applications using frameworks like Next.js and
libraries like React.js, as well as back-end languages like Python.
	</li>
<li>
Developing responsive web applications, ensuring accessibility across
various devices and screen sizes.
	</li>
<li>Developing web interfaces from designs created in Figma.</li>
<li>
Creating complex components using drag and drop, and analyzing
dashboards.
	</li>
<li>
Optimizing website performance and loading speed using techniques such
as memorization and design patterns.
	</li>
<li>
Integrating with various APIs such as ChatGPT 3.5 and DeepSeek v2.
	</li>
<li>Using GitHub as version control.</li>
</ul>
*/
