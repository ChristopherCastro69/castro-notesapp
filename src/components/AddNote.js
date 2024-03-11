import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/AddNotes.css"; // Import the CSS file

function AddNote() {
  const location = useLocation();
  const userId = location.state?.userId;
  const [note, setNote] = useState("");
  const [noteStatus, setNoteStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Hook to access navigation function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", userId);
      formData.append("note", note);

      const response = await axios.post(
        "http://hyeumine.com/newnote.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setNoteStatus("Note added successfully!");
      setErrorMessage(""); // Clear error message
      console.log(response.data); // This will log the response from the API
      setNote(""); // Clear the note input after successful submission
    } catch (error) {
      console.error("Error adding note:", error);
      setNoteStatus(""); // Clear note status
      setErrorMessage("Failed to add note!"); // Set error message
    }
  };

  const displayNotes = () => {
    navigate("/displaynotes", { state: { userId: userId } });
  };

  return (
    <div className="add-note-container">
      <h2>Add Note for User ID: {userId}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Note:
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Note</button>
      </form>
      {noteStatus && <p className="note-status">{noteStatus}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={displayNotes}>Display Notes</button>
    </div>
  );
}

export default AddNote;
