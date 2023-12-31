import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./containers/Home";
import Meet from "./containers/meet";
import Index from "./containers/index";
import Event from "./containers/event";
import Join from "./containers/join"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meet" element={<Meet />} />
      <Route path="/index" element={<Index />} />
      <Route path="/event" element={<Event />}/>
      <Route path="/login" element={<Join/>}/>
      
    </Routes>
  );
}

export default Router;
