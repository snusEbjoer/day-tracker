import { CheckList } from "./components/CheckList/CheckList";
import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Kanban } from "./components/Kanban/Kanban";
function App() {
  const LayoutWrapper = (element: JSX.Element) => {
    return <Layout>{element}</Layout>;
  };
  return (
    <Routes>
      <Route path="/" element={LayoutWrapper(<CheckList />)} />
      <Route path="/kanban" element={LayoutWrapper(<Kanban />)} />
    </Routes>
  );
}

export default App;
