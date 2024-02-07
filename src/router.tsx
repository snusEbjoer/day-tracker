import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CheckList } from "./pages/CheckList";
import { Kanban } from "./pages/Kanban";
import { Pomadoro } from "./pages/Pomodoro/Pomodoro";
import { Flowmadoro } from "./pages/Flowmadoro/Flowmadoro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <CheckList /> },
      { path: "kanban", element: <Kanban /> },
      { path: "pomadoro", element: <Pomadoro /> },
      { path: "flowmadoro", element: <Flowmadoro /> },
    ],
  },
]);
