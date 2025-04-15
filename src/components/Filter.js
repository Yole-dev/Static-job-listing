import FilterContent from "./FilterContent";

export default function Filter({ onClear, filterTexts, onRemoveFilterItem }) {
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
