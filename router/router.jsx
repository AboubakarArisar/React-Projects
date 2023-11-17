import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from '../src/Todo';
import Calc from '../src/Calc';
import Nav from '../src/Nav';
import {StWatch} from "../src/StWatch";
import { Navbar,Footer } from "../src/Nav";
import Magic from "../src/Magic";
import Colors from "../src/Colors";
const AppRoutes = () => {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Calc" element={<Calc />} />
          <Route path="/StWatch" element={<StWatch />} />
          <Route path="/Magic" element={<Magic />} />
          <Route path="/Colors" element={<Colors />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};  
export default AppRoutes;
