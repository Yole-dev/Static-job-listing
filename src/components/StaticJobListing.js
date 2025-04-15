import { useState } from "react";
import desktopbg from "../images/bg-header-desktop.svg";
import mobilebg from "../images/bg-header-mobile.svg";
import data from "./App";
import JobCard from "./App";
import Filter from "./Filter";
import Header from "./Header";

export default function StaticJobListing() {
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
