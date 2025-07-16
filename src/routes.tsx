import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Sobre from "./pages/Sobre/Sobre";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Sobre/>}/>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
      <Footer/>
    </Router>
  )
}