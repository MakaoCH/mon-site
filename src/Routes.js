import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProjectDescription from "../src/Pages/ProjectDescription/ProjectDescritpion";
import Layout from './components/Layout/Layout';


function App() {
  return (
    <div>
      <BrowserRouter >

        <Routes>
          <Route element={<Layout />}>
            <Route path='/mon-site' element={<Home />} />
            <Route path='/ProjectDescription/:id' element={<ProjectDescription />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

