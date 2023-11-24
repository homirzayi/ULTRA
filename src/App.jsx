import { useRoutes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import routes from "./routes";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      {router}
      <Footer />
    </>
  );
}

export default App;
