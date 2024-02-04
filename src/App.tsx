import "./App.css";
import { CheckList } from "./components/CheckList/CheckList";
import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Kanban } from "./components/Kanban/Kanban";
import { DashboardPage } from "./components/DashboardPage/DashboardPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<DashboardPage />} />
        <Route path="checklist" element={<CheckList/>}/>
        <Route path="kanban" element={<Kanban />} />
      </Route>
    </Routes>
  );
}

export default App;
