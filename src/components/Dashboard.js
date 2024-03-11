import React, { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const userId = location.state?.userId;
  const navigate = useNavigate();

  const handleDisplayNote = () => {
    navigate("/displaynotes", { state: { userId: userId } });
  };

  const redirectToNotes = () => {
    window.open("http://hyeumine.com/notesposted.php", "_blank");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleDisplayNote}>Display Notes</button>
      <button onClick={redirectToNotes}>Go to Notes</button>
    </div>
  );
}

export default Dashboard;
