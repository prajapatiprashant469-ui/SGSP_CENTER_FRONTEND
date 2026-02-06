const Sidebar = ({ open, onClose }) => {
    if (!open) return null;
  
    return (
      <>
        {/* Overlay */}
        <div style={overlayStyle} onClick={onClose} />
  
        {/* Sidebar */}
        <aside style={sidebarStyle}>
          <h3>Categories</h3>
  
          <ul style={listStyle}>
            <li>Banarasi Sarees</li>
            <li>Paithani</li>
            <li>Pure Saree</li>
          </ul>
  
          <button onClick={onClose} style={closeBtn}>
            Close
          </button>
        </aside>
      </>
    );
  };
  
  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "260px",
    height: "100%",
    backgroundColor: "#fff",
    padding: "20px",
    zIndex: 1001,
    boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
  };
  
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1000,
  };
  
  const listStyle = {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  };
  
  const closeBtn = {
    marginTop: "20px",
  };
  
  export default Sidebar;
  