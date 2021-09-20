import { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("About Me")
  return (
    <div className="App">
      <Header changePage={setPage}/>
      <Main currentPage={page} />
      <Footer />
    </div>
  );
}

export default App;
