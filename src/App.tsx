import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About } from "./views"
import { RootLayout } from "./layout/RootLayout";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "about",
                    element: <About />,
                }
            ]
        }

    ])

    return <RouterProvider router={routes} />;
}

export default App
