import axios from "axios";

export const fetchAllNotes = async (setNotes) => {
  try {
    const uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/notes`;
    const response = await axios.get(uri);
    const data = response.data;
    console.log(data);
    setNotes(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchNoteById = async (noteId, setNote) => {
  try {
    const uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/notes/${noteId}`;
    const response = await axios.get(uri);
    const data = response.data;
    console.log(data);
    setNote(data);
  } catch (error) {
    console.log(error);
  }
};

export const addNewNote = async (note) => {
  try {
    const uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/notes`;
    const response = await axios.put(`${uri}?noteId=${note._id}`, note);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
