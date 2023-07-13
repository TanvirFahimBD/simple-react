import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header title="Simple React App" />
      <Content />
      <Footer info={{ name: "tanvir" }} />
    </div>
  );
}

export default App;
