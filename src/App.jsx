import NotesPage from "./pages/NotesPage";
import { Client } from "appwrite";
import NoteProvider from "./context/NoteContext";

function App() {
  return (
    <div id="app">
      <NoteProvider>
        <NotesPage />
      </NoteProvider>
    </div>
  );
}

export default App;
