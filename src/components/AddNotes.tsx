import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  addNote: (note: any) => void;
};

const AddNotes: React.FC<Props> = ({ addNote }) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [note, setNote] = useState<any>({
    title: "",
    content: "",
  });

  const handleExpend = () => {
    setExpand(true);
  };

  const handleBlur = () => {
    setExpand(false);
  };

  const onChangeTitle = (
    e: React.MouseEventHandler | React.MouseEvent | any
  ) => {
    setNote({
      ...note,
      title: e.target.value,
    });
  };

  const onChangeDescription = (
    e: React.MouseEventHandler | React.MouseEvent | any
  ) => {
    setNote({
      ...note,
      content: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.MouseEventHandler | React.MouseEvent | any
  ) => {
    e.preventDefault();
    if (note.title && note.content) {
      addNote(note);
      setNote({
        title: "",
        content: "",
      });
      toast.success("Note added successfully", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.error("Please fill all the fields",{
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div
      className="flex flex-col mt-4 align-center mx-auto w-96 border rounded-sm border-warning shadow-2xl"
      onDoubleClick={handleBlur}
    >
      <ToastContainer />
      <input
        className="outline-0 font-bold text-black"
        type="text"
        placeholder="Add a note"
        onClick={handleExpend}
        onChange={onChangeTitle}
        value={note.title}
      />
      {expand && (
        <>
          <textarea
            className="outline-0 mt-2 border-0 textarea"
            placeholder="description"
            onChange={onChangeDescription}
            value={note.content}
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-sm"
            onClick={handleSubmit}
          />
        </>
      )}
    </div>
  );
};

export default AddNotes;
