import mobilebg from "./images/bg-header-mobile.svg";
// import desktopbg from "./images/bg-header-desktop.svg";
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
    location: "USA Only",
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
    location: "USA Only",
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
    location: "USA Only",
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
    location: "UK Only",
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
    location: "USA Only",
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
  return (
    <div>
      {/* conditional rendering for the header background */}
      <Header src={mobilebg} />

      <div className="container">
        {data.map((job) => (
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
            language={job.language}
            tools={job.tools}
            key={job.id}
          />
        ))}
      </div>
    </div>
  );
}

function Header({ src }) {
  return (
    <div className="header">
      <img src={src} alt="background" />
    </div>
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
}) {
  return (
    <div className="job-card">
      <div></div>

      <div>{company}</div>
    </div>
  );
}
