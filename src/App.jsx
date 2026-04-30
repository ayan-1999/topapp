import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Aqua from "./pages/aqua/Aqua";
import ProductDetails from "./pages/ProductDetails";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aqua" element={<Aqua />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
