const Header = ({ onMenuClick }) => {
    return (
      <header style={headerStyle}>
        <button onClick={onMenuClick} style={menuButton}>
          ☰
        </button>
  
        <h2 style={{ margin: 0 }}>Saree Store</h2>
      </header>
    );
  };
  
  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "60px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "0 20px",
    backgroundColor: "#000",
    color: "#fff",
    zIndex: 1000,
  };
  
  const menuButton = {
    fontSize: "22px",
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  };
  
  export default Header;
  