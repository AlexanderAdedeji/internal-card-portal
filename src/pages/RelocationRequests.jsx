import React from "react";
import RelocateFrom from "../components/RelocateFrom";
import { Routes, Route } from "react-router-dom";
import RelocateTo from "../components/RelocateTo";
import RelocateCreateOrder from "../components/RelocateCreateOrder";

const RelocationRequests = () => {

  return (
    <Routes>
      <Route
        index
        element={<RelocateFrom />}
      />
      <Route path=":lga" element={<RelocateTo />} />
      <Route path="/create-relocate-order" element={<RelocateCreateOrder />} />

    </Routes>
  );
};

export default RelocationRequests;
