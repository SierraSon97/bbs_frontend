import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListBoardComponent from "./components/ListBoardComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Router>
        {" "}
        # 3.
        <HeaderComponent /> # 4.
        <div className="container">
          <Routes>
            {" "}
            # 5.
            <Route path="/" exact component={ListBoardComponent}></Route>
            <Route path="/board" component={ListBoardComponent}></Route>
          </Routes>
        </div>
        <FooterComponent /> # 6.
      </Router>
    </div>
  );
}

export default App;
