import UserProfile from "../pages/UserProfile/UserProfile.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
