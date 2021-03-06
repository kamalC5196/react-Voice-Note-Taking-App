import React from 'react';

function Notes({ notes, addNotes, search }) {
  console.log(notes);
  function handleDelete(note) {
    const updatedNotes = notes.filter((n) => n.id !== note.id);
    addNotes(updatedNotes);
  }
  if (!notes.length)
    return <h2 className="text-center">No Notes to display</h2>;
  return (
    <div
      className="row"
      style={{ maxHeight: 'calc(100vh-30px)', overflowY: 'scroll' }}
    >
      {notes.map(
        (note) =>
          (note.title.toLowerCase().includes(search.toLowerCase()) ||
            note.note.toLowerCase().includes(search.toLowerCase())) && (
            <div
              className="card border border-primary mx-2 my-2 col;sm-4"
              style={{ width: '18rem', textTransform: 'capitalize' }}
              key={note.id}
            >
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text my-3">{note.note}</p>
                <a
                  href="#"
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(note);
                  }}
                >
                  Delete Note
                </a>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Notes;
