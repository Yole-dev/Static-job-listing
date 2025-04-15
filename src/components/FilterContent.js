export default function FilterContent({ text, onRemoveItem }) {
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
