import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/" element={<Inicio />} />
      <Route path="*" element={<NotFound/>} />
     
    </Routes>
  );
}

export default App;