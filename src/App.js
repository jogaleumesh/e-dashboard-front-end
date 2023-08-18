import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateComponent from "./components/PrivateComponent";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import AddProduct from "./Pages/AddProduct";
import ProductList from "./Pages/ProductList";
import UpdateProduct from "./Pages/UpdateProduct";

import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/profile" element={<h1>Profile Page</h1>} />
          </Route>

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
