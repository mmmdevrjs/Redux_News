import Navbar from "../components/Navbar";
import NewForm from "./NewForm";
import NewList from "./NewList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content container">
        <NewList />
        <div className="content__page">
          <NewForm />
        </div>
      </div>
    </div>
  );
}

export default App;
