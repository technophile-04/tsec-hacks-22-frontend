import UserProfile from "../pages/UserProfile/UserProfile.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing.jsx";
import UniPage from "../pages/UniPage";
import PendingTransfers from "../pages/PendingTransfers";
import TransferConfirm from "../components/ConfirmTranfers/TransferConfirm.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/uni/:id" element={<UniPage />} />
          <Route path="/uni/verify/:id" element={<PendingTransfers />} />
          <Route path="/uni/transfer/:id" element={<TransferConfirm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
