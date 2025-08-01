import NotesList from "@/components/NoteList/NoteList";

export default function NotesPage() {
  return (
    <main className="p-8">
      <NotesList notes={[]} />
    </main>
  );
}
