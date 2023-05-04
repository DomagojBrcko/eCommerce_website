import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import New from "./Pages/New";
import Sale from "./Pages/Sale";
import ShoppingCart from "./Pages/ShoppingCart";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Title from "./Components/Title/Title";

function App() {
    return (
        <Router>
            <Header />
            <Title />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Men" element={<Men />}></Route>
                <Route path="/Women" element={<Women />}></Route>
                <Route path="/New" element={<New />}></Route>
                <Route path="/Sale" element={<Sale />}></Route>
                <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
