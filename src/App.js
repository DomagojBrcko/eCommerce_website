import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Men } from "./Pages/Men";
import { Women } from "./Pages/Women";
import { New } from "./Pages/New";
import { Sale } from "./Pages/Sale";
import { ShoppingCart } from "./Pages/ShoppingCart";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Title from "./Components/Title/Title";
import { ShopContextProvider } from "./Context/ShopContext";

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Header />
                    <Title />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Men" element={<Men />} />
                        <Route path="/Women" element={<Women />} />
                        <Route path="/New" element={<New />} />
                        <Route path="/Sale" element={<Sale />} />
                        <Route
                            path="/ShoppingCart"
                            element={<ShoppingCart />}
                        />
                    </Routes>
                    <Footer />
                </Router>
            </ShopContextProvider>
        </div>
    );
}

export default App;
