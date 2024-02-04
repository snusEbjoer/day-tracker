import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CheckList } from "./pages/CheckList";
import { Kanban } from "./pages/Kanban";
import { Dashboard } from "./pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/', element: <Layout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'checklist', element: <CheckList /> },
            { path: 'kanban', element: <Kanban /> }
        ],
    }
])
