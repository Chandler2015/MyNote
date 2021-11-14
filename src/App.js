import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteListPage from './pages/NoteListPage'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
      <Route path = "/" exact element = {<NotesListPage />}   />  
      <Route path = "/note/:id" element = {<NoteListPage />}  />
      </Routes>
    </div>
    </Router>
  
  );
}

export default App;
