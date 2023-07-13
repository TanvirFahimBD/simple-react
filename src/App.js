import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header title="Simple React App" />
      <Content />
      <Footer quote="Knowledge is power" />
    </div>
  );
}

export default App;
