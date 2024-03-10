import axios from "axios";

export const summarizeMix = async (
  notes,
  convertedLecture,
  setGeneratedSummary
) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API}/mix`;
  try {
    const response = await axios.post(url, { notes, convertedLecture });
    setGeneratedSummary(response.data.content);
  } catch (error) {
    console.log(error);
  }
};
