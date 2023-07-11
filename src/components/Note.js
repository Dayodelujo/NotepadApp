import { MdDeleteForever, MdEditNote } from 'react-icons/md';
import { useState } from 'react';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote, editMode, setEditMode }) => {
    const [updatedText, setUpdatedText] = useState(text);

    const handleInputChange = (event) => {
        setUpdatedText(event.target.value);
    };
    
    const handleSaveNote = () => {
        handleEditNote(id, updatedText);
        setEditMode(null)
    };

    
    return (
        <div className='note'>
            {editMode ? (
                <>
                    <input type='text' value={updatedText} onChange={handleInputChange} />
                    <button onClick={() => handleSaveNote()}>Save</button>
                </>
            ) : (
                <>
                        <span>{text}</span>
                        <div className='note-footer'>
                            <small>{date}</small>
                            <div className='icons'>
                                <MdEditNote 
                                    onClick={() => setEditMode(id)} 
                                    className='edit-icon' 
                                    size='1.5em'
                                />
                                <MdDeleteForever 
                                    onClick={() => handleDeleteNote(id)} 
                                    className='delete-icon' 
                                    size='1.4em' 
                                />
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
};

export default Note;