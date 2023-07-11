import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from './components/Search';
import Header from './components/Header';
import { Helmet } from "react-helmet";

const App = () => {
  const storedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );
  const [notes, setNotes] = useState(storedNotes || [
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2023"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "21/04/2023"
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const storedDarkMode = JSON.parse(
    localStorage.getItem('react-notes-app-dark-mode')
  );

  const [darkMode, setDarkMode] = useState(storedDarkMode || false);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-dark-mode',
      JSON.stringify(darkMode)
    );
  }, [darkMode]);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const editNote = (id, updatedText) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text: updatedText };
      }
      return note;
    });

    setNotes(updatedNotes);
  };


  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (

    <div className={`${darkMode && 'dark-mode'}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Note Pad</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Testing icon and title" />
      </Helmet>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={(searchText) => setSearchText(searchText.toLowerCase())} />
        <NotesList
          notes={notes.filter((note) =>
            note.text && note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleEditNote={editNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
