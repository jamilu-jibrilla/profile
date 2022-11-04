import { Routes, Route } from "react-router-dom"
import App from "./App"
import Contact from "./components/Contact/Contact"

function Router () {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Contact /> } />
        </Routes>

    )
}

export default Router