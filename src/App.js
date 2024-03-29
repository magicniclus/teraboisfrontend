import "./style/style.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Footer from "./component/Footer";
import LandingPage from "./pages/LandingPage";
import ConnectionPage from "./pages/ConnectionPage";
import AdminPage from "./pages/AdminPage";
import { useState } from "react";
import Politique from "./pages/Politique";
import Cookies from "./component/cookies/Cookies";
import Condition from "./pages/Condition";
import Remerciement from "./pages/Remerciement";

/**
 * A function that returns a component.
 * @returns The return value of the function passed to useState.
 */
function App() {

  /* It's a hook that allows you to use state in a functional component. */
  const state = useState(state => state)

  // console.log(window.location.pathname);

  /* It's a hook that allows you to use state in a functional component. */
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/accueil" element={<HomePage />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/nous-contacter" element={<LandingPage />}/>
          <Route path="/connection" element={<ConnectionPage />}/>
          <Route path="/conditions-generales" element={<Condition />} />
          <Route path="/politique-de-confidentialite" element={<Politique />}/>
          <Route path="/admin" element={<AdminPage />}/>
          <Route path="/remerciement" element={<Remerciement />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
        <Footer />  
        {
          localStorage.cookies === "false" ? <Cookies /> : null
        } 
      </BrowserRouter>
    </div>
  );
}

export default App;
