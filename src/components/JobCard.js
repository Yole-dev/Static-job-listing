import Languages from "./App";
import Tools from "./App";

export default function JobCard({
  company,
  logo,
  newJob,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  onClick,
}) {
  return (
    <div className={`job-card ${!newJob || !featured ? "padding-start" : ""}`}>
      {newJob && featured && <div className="filtered"></div>}

      <div className="job-details">
        <div className="sub-container">
          <img src={logo} alt="company logo" />

          <div className="sub-container-desktop">
            <div className="job-status-container">
              <p className="company">{company}</p>

              <div className="job-status">
                {newJob && <p className="new">NEW!</p>}
                {featured && <p className="featured">FEATURED</p>}
              </div>
            </div>

            <p className="position">{position}</p>

            <p className="timeline">{`${postedAt} . ${contract} . ${location}`}</p>
          </div>
        </div>

        <hr />

        <div className="skills" onClick={onClick}>
          <p className="skill-hover">{role}</p>
          <p className="skill-hover">{level}</p>

          {languages.map((language, i) => (
            <Languages language={language} key={i} />
          ))}

          {tools.map((tool, i) => (
            <Tools tool={tool} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
