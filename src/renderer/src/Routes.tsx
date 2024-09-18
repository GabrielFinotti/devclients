import { Router, Route } from "electron-router-dom";

import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Detail from "./pages/detail/Detail";
import About from "./pages/about/About";
import Layout from "./components/layouts";

const Routes = () => {
  return (
    <Router
      main={
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/detail" element={<Detail></Detail>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Route>
      }
    ></Router>
  );
};

export default Routes;
