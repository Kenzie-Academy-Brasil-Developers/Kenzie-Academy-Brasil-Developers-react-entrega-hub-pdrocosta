import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <GlobalStyle>
      <div className="App">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </GlobalStyle>
  );
}

export default App;
