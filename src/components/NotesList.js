import Note from "./Note";
import AddNote from "./AddNote";
import { useState } from "react";

const NotesList = ({ notes, handleAddNote, handleEditNote, handleDeleteNote }) => {
    const [editMode, setEditMode] = useState(null);

    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note 
                key={note.id}
                id={note.id}
                text={note.text}
                date={note.date}
                handleEditNote={handleEditNote}
                handleDeleteNote={handleDeleteNote}
                editMode={editMode === note.id}
                setEditMode={setEditMode}
                />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );  
};


export default NotesList;