import React, { useRef } from 'react';
function AddNotes({ addNotes }) {
  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.elements.noteTitle.value;
    const note = e.target.elements.noteNote.value;
    addNotes((prevNotes) => {
      const updatedNotes = {
        id: prevNotes.length + 1,
        title,
        note,
      };
      return prevNotes.concat(updatedNotes);
    });
    formRef.current.reset();
  }
  return (
    <form
      ref={formRef}
      className="form-inline col-sm-8 mx-2 fixed-bottom"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className=" mb-2 col-sm-3">
          <input
            type="text"
            readonly
            className="form-control border border-primary"
            id="noteTitle"
            placeHolder="Note Title"
          />
        </div>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control border border-primary"
            id="noteNote"
            placeholder="Notes"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2 col-sm-2">
          Add Note
        </button>
      </div>
    </form>
  );
}
export default AddNotes;
