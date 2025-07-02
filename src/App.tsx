import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./views/Start.tsx";
import Question from "./views/Question.tsx";
import Result from "./views/Result.tsx";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
