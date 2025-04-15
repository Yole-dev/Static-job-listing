import mobilebg from "./images/bg-header-mobile.svg";
import desktopbg from "./images/bg-header-desktop.svg";
import photosnap from "./images/photosnap.svg";
import manage from "./images/manage.svg";
import account from "./images/account.svg";
import myhome from "./images/myhome.svg";
import loopStudios from "./images/loop-studios.svg";
import faceIt from "./images/faceit.svg";
import shortly from "./images/shortly.svg";
import insure from "./images/insure.svg";
import eyecam from "./images/eyecam-co.svg";
import airFilter from "./images/the-air-filter-company.svg";
import { useState } from "react";

const data = [
  {
    id: 1,
    company: "Photosnap",
    logo: photosnap,
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: manage,
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: account,
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: myhome,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: loopStudios,
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: faceIt,
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: shortly,
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: insure,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: eyecam,
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: airFilter,
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

export default function App() {
  return (
    <div>
      <StaticJobListing />
    </div>
  );
}

function StaticJobListing() {
  const [isOpen, setIsOpen] = useState(false);
  const [filterTexts, setFilterTexts] = useState([]);

  function handleClick(e) {
    const item = e.target.textContent;
    setFilterTexts((text) => (text.includes(item) ? text : [...text, item]));
    setIsOpen(true);
  }

  function handleClear() {
    setIsOpen(false);
    setFilterTexts([]);
  }

  function handleRemoveFilterItem(filteredText) {
    setFilterTexts((item) => item.filter((item) => item !== filteredText));
  }

  const filteredJobs =
    filterTexts.length >= 0
      ? data.filter((job) => {
          const jobFilters = [
            job.role,
            job.level,
            ...job.languages,
            ...job.tools,
          ];

          return filterTexts.every((filter) => jobFilters.includes(filter));
        })
      : data;

  return (
    <div>
      <Header mobilesrc={mobilebg} desktopsrc={desktopbg} />

      {(isOpen || filterTexts.length > 0) && (
        <Filter
          onClear={handleClear}
          filterTexts={filterTexts}
          onRemoveFilterItem={handleRemoveFilterItem}
        />
      )}

      <div className="container">
        {filteredJobs.map((job) => (
          <JobCard
            company={job.company}
            logo={job.logo}
            newJob={job.new}
            featured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            tools={job.tools}
            key={job.id}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

function Header({ mobilesrc, desktopsrc }) {
  return (
    <div className="header">
      <img
        src={mobilesrc}
        alt="mobile header background"
        className="mobile-header"
      />

      <img
        src={desktopsrc}
        alt="desktop header background"
        className="desktop-header"
      />
    </div>
  );
}

function Filter({ onClear, filterTexts, onRemoveFilterItem }) {
  return (
    <div className="filter-container">
      <div className="filter">
        <div className="filter-content">
          {filterTexts.map((el, i) => (
            <FilterContent
              text={el}
              key={`${el}-${i}`}
              onRemoveItem={onRemoveFilterItem}
            />
          ))}
        </div>

        <p onClick={onClear} className="clear-filter">
          Clear
        </p>
      </div>
    </div>
  );
}

function FilterContent({ text, onRemoveItem }) {
  return (
    <p className="filter-item">
      {text}

      <span className="delete-filter-item">
        <ion-icon
          name="close-sharp"
          className="close-icon"
          onClick={() => onRemoveItem(text)}
        ></ion-icon>
      </span>
    </p>
  );
}

function JobCard({
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
          <p>{role}</p>
          <p>{level}</p>

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

function Languages({ language }) {
  return <p>{language}</p>;
}

function Tools({ tool }) {
  return <p>{tool}</p>;
}
