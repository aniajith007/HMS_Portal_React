import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Login from './Pages/login';
import Main from "./Pages/Main";
import RegHMS from "./Pages/Registration";
import Report from "./Pages/Report";

function App() {
  return (
    <BrowserRouter>
      <Routes>        
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/reghms" element={<RegHMS />} />
          <Route path="/Error" element={<ErrorPage />} />
          <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
