import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingPages from "./components/loading ( pages )/loading";
import Home from "./pages/home/home";

function App() {

  const About = React.lazy(() => import('./pages/about/about'))

  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={
        <Suspense fallback={<LoadingPages/>}>
          <About/>
        </Suspense>
      }/>
    </Routes>
  </div>
  )
}

export default App;
