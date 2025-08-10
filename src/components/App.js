import { Container } from "reactstrap";
import NavigationBar from "./NavigationBar";
import SummaryPage from "./main/SummaryPage";
import SearchBar from "./main/SearchBar";
import BookQuotes from "./main/BookQuotes";
import BookSummary from "./main/BookSummary";
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
          <Route exact path="/alintilar" element={<BookQuotes />}></Route>
          <Route exact path="/ozetler" element={<BookSummary />}></Route>
        </Routes>

      </Container>
    </div>
  );
}

export default App;
