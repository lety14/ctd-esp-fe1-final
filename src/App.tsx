import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home.page";
import FavoritePage from "./pages/Favorites.page";
import DetailPage from "./pages/Detail.page";
import Header from "./components/layout/header.component";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
