import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RecipePage from "./components/RecipePage";
import SearchRecipe from "./components/SearchRecipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipe/:id" element={<RecipePage />} />
        <Route path="search" element={<SearchRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
