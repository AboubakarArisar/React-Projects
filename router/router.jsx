import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "../src/Todo";
import { StWatch } from "../src/StWatch";
import Navbar from "../src/Navbar";
import Footer from "../src/Footer";
import Magic from "../src/Magic";
import Colors from "../src/Colors";
import Calculator from "../src/Calculator";
import App from "../src/App";
const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Todo' element={<Todo />} />
          <Route path='/Calc' element={<Calculator />} />
          <Route path='/StWatch' element={<StWatch />} />
          <Route path='/Magic' element={<Magic />} />
          <Route path='/Colors' element={<Colors />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default AppRoutes;
