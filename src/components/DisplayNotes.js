import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/DisplayNotes.css"; // Import the CSS file

function DisplayNotes() {
  const location = useLocation();
  const userId = location.state?.userId;
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchNotes(userId);
    }
  }, [userId]);

  const fetchNotes = async (userId) => {
    try {
      const response = await axios.get(
        `http://hyeumine.com/mynotes.php?id=${userId}`
      );
      setNotes(response.data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleAddNote = () => {
    navigate("/addnote", { state: { userId: userId } });
  };

  const handleDashboard = () => {
    window.open("http://hyeumine.com/notesposted.php", "_blank");
  };

  const handleLogout = () => {
    // Update the userId data in local storage to null
    localStorage.setItem("userId", null);

    // Navigate back to the login route
    navigate("/login");
  };

  return (
    <div className="display-notes-container">
      <div className="logout-container"></div>
      <h1>Your Notes : {userId}</h1>

      <button onClick={handleAddNote}>Add Notes</button>
      <button onClick={handleDashboard}>Dashboard</button>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <div className="notes-container">
        <h2>All Notes:</h2>
        {notes.map((note, index) => (
          <NoteBox key={index} note={note} />
        ))}
      </div>
    </div>
  );
}

function NoteBox({ note }) {
  return (
    <div className="note-box">
      <p className="note-text">{note[0]}</p>
      <p className="note-date">Date: {note[1]}</p>
    </div>
  );
}

export default DisplayNotes;
