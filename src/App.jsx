import { Route, Routes } from "react-router-dom";
import "./App.styles.scss";
import Home from "./components/routes/home.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  );
};

export default App;
