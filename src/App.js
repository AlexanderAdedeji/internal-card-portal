import { Routes, Route } from "react-router-dom";
import BatchProcess from "./pages/BatchProcess";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./assets/styles/app.scss";
import DeliverRequests from "./pages/DeliverRequests";
import RelocationRequests from "./pages/RelocationRequests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="batches" element={<BatchProcess />} />
          <Route path="delivery-request/*" element={<DeliverRequests />} />
          <Route path="relocation-request/*" element={<RelocationRequests />} />
        </Route>

        <Route path="/" element={<Login />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
