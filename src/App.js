import "./App.css";
import { Routes, Route } from "react-router-dom";
import Inbox from "./components/Inbox";
import Spam from "./components/Spam";
import Trash from "./components/Trash";
import EmailPage from "./components/EmailPage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <h1>Bhumika's mail box</h1>
      <div className="email-body">
        <div className="app-email-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inbox />}></Route>
        <Route path="/spam" element={<Spam />}></Route>
        <Route path="/trash" element={<Trash />}></Route>
        <Route path="/inbox/:mailId" element={<EmailPage />}></Route>
      </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
