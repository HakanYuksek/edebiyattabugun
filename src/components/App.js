import { Container } from "reactstrap";
import NavigationBar from "./NavigationBar";
import SummaryPage from "./main/SummaryPage";
import SearchBar from "./main/SearchBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Container className="mt-4">
        <Routes>
          <Route exact path="/" element={<SummaryPage />}></Route>
          <Route exact path="/kelime-ara" element={<SearchBar />}></Route>
          <Route exact path="/edebiyattabugun" element={<SummaryPage />}></Route>
        </Routes>

      </Container>
    </div>
  );
}

export default App;
