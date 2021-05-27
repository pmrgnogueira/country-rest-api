const Header = ({ onThemeToggle }) => {
  return (
    <header>
      <h1>Where in the World?</h1>
      <button onClick={onThemeToggle}>Dark Mode</button>
    </header>
  );
};

export default Header;
