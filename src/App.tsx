import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import RutaPrivada from "./components/RutaPrivada";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<RutaPrivada />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;