import axios from "axios";
import type { Note } from "@/types/note";

const URL = "https://notehub-public.goit.study/api/notes";

export const fetchNotes = async () => {
  const response = await axios.get(URL, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });
  return response.data;
};
