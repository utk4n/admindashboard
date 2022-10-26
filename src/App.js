import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import SinglePage from "./Pages/SinglePage/SinglePage";
import NewPage from "./Pages/NewPage/NewPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userID" element={<SinglePage />} />
            <Route path="newpage" element={<NewPage />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productID" element={<SinglePage />} />
            <Route path="newpage" element={<NewPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
