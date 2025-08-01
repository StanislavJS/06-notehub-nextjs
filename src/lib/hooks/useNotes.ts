import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../api/noteService";

export const useNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });
};
