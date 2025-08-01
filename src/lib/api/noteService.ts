// src/services/noteService.ts
import axios from "axios";
import type { Note } from "@/types/note";

const BASE_URL = "https://notehub-public.goit.study/api";

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

if (!token) {
  console.warn("⚠️ NEXT_PUBLIC_NOTEHUB_TOKEN is not set in .env.local");
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export const fetchNotes = async (): Promise<Note[]> => {
  const response = await axiosInstance.get<Note[]>("/notes");
  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await axiosInstance.get<Note>(`/notes/${id}`);
  return response.data;
};

export const createNote = async (note: Partial<Note>): Promise<Note> => {
  const response = await axiosInstance.post<Note>("/notes", note);
  return response.data;
};

export const updateNote = async (id: string, note: Partial<Note>): Promise<Note> => {
  const response = await axiosInstance.put<Note>(`/notes/${id}`, note);
  return response.data;
};

export const deleteNote = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/notes/${id}`);
};

// import axios from "axios";
// import type { Note } from "@/types/note";

// const URL = "https://notehub-public.goit.study/api/notes";

// export const fetchNotes = async (): Promise<Note[]> => {
//   const response = await axios.get<Note[]>(URL, {
//     headers: {
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//     },
//   });
//   return response.data;
// };
