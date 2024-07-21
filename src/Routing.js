import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "./App"
import { Inventory } from "./pages/en/Inventory";
import { Rent } from "./pages/en/Rent";
import { Contact } from "./pages/en/Contact";
import { Thanks } from "./pages/en/Thanks";
import { Payment } from "./pages/en/Payment";
import { AppFr } from "./pages/fr/AppFr";




export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="">
                    <Route index element={<App />}></Route>
                    <Route path="/en/Inventory" element={<Inventory />}></Route>
                    <Route path="/en/Rent" element={<Rent />}></Route>
                    <Route path="/en/Contact" element={<Contact />}></Route>
                    <Route path="/en/Thanks" element={<Thanks />}></Route>
                    <Route path="/en/Payment" element={<Payment />}></Route>
                </Route>
                <Route path="/fr">
                    <Route path="/fr/" element={<AppFr />}></Route>
                    <Route path="/fr/Inventory" element={<Inventory />}></Route>
                    <Route path="/fr/Rent" element={<Rent />}></Route>
                    <Route path="/fr/Contact" element={<Contact />}></Route>
                    <Route path="/fr/Thanks" element={<Thanks />}></Route>
                </Route>
                
            </Routes>
        </Router>
    );
}