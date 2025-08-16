import { Container } from "reactstrap";
import NavigationBar from "./NavigationBar";
import SummaryPage from "./main/SummaryPage";
import BookQuotes from "./main/BookQuotes";
import BookSummary from "./main/BookSummary";
import { Route, Routes } from "react-router-dom";
import BookRecommendation from "./main/BookRecommendation";
import About from "./main/About";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Container className="mt-4">
        <Routes>
          <Route exact path="/" element={<SummaryPage />}></Route>          
          <Route exact path="/edebiyattabugun" element={<SummaryPage />}></Route>
          <Route exact path="/alintilar" element={<BookQuotes />}></Route>
          <Route exact path="/ozetler" element={<BookSummary />}></Route>
          <Route exact path="/oneri" element={<BookRecommendation />}></Route>
          <Route exact path="/hakkinda" element={<About />}></Route>
        </Routes>

      </Container>
    </div>
  );
}

export default App;
