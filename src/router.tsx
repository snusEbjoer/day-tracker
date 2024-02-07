import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CheckList } from "./pages/CheckList";
import { Kanban } from "./pages/Kanban";
import { Timer } from "./components/Timer/Timer";
import { Pomadoro } from "./pages/Pomodoro/Pomodoro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <CheckList /> },
      { path: "kanban", element: <Kanban /> },
      { path: "pomadoro", element: <Pomadoro /> },
    ],
  },
]);
