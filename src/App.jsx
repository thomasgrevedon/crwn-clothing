import { Route, Routes } from "react-router-dom";
import "./App.styles.scss";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";

const Shop = () => {
  return <div>Go shopping</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index path='home' element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
