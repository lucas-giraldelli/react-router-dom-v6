import { NavLink, Outlet } from "react-router-dom";

export function RootLayout() {
    return (
        <>
            <header>
                <nav>
                    <h1>Jobarouter</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
