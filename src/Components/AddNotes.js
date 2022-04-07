import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function AddNotes({ addNotes, isOpen, setOpen }) {
  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.elements.noteTitle.value;
    const note = e.target.elements.noteNote.value;
    addNotes((prevNotes) => {
      const updatedNotes = {
        id: prevNotes.length + 1,
        title,
        note
      };
      return prevNotes.concat(updatedNotes);
    });
    formRef.current.reset();
  }

  function handleModal() {
    setOpen(!isOpen);
  }

  return (
    <Modal show={isOpen} size="lg">
      <Modal.Header>
        <h4 className="text-center">Add Notes</h4>
        <h2
          className="text-danger font-weight-bold"
          style={{ cursor: "pointer" }}
          onClick={handleModal}
        >
          X
        </h2>
      </Modal.Header>
      <Modal.Body className="text-center">
        <form
          ref={formRef}
          className="form-inline col-sm-12 mx-2"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className=" mb-2 col-sm-12">
              <input
                type="text"
                readonly
                className="form-control border border-primary"
                id="noteTitle"
                placeHolder="Note Title"
              />
            </div>
            <div className="col-sm-12">
              <textarea
                className="form-control border border-primary"
                id="noteNote"
                rows="3"
                placeHolder="Notes..."
              ></textarea>
            </div>
            <center>
              <button
                type="submit"
                className="btn btn-primary mb-2 my-4 col-sm-3"
              >
                Add Note
              </button>
            </center>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
export default AddNotes;
