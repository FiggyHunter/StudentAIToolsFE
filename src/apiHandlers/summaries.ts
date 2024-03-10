import axios from "axios";

export const getSummaries = async (setSummaries) => {
  try {
    const uri = `${process.env.NEXT_PUBLIC_BACKEND_API}/summarys`;
    const response = await axios.get(uri);
    const data = response.data;
    console.log(data);
    setSummaries(data);
  } catch (error) {
    console.log(error);
  }
};
