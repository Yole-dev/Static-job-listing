export default function Header({ mobilesrc, desktopsrc }) {
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
