import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
