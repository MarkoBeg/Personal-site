import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./components/Theme";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
