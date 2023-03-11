import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Error from "./Component/Error";
import { Routes, Route } from "react-router-dom";
import Details from "./Component/Details";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
