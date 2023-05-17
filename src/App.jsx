import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import List from "./component/List";
import Register from "./component/Register"
import Update from "./component/Update";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
