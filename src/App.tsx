import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { Kanban } from "./pages/Kanban";
import { CheckList } from "./pages/CheckList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CheckList />} />
        <Route path="/kanban" element={<Kanban />} />
      </Route>
    </Routes>
  );
}

export default App;
