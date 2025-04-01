import { Container } from "reactstrap";
import NavigationBar from "./NavigationBar";
import SummaryPage from "./main/SummaryPage";


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Container className="mt-4">
        <SummaryPage></SummaryPage>
      </Container>
    </div>
  );
}

export default App;
