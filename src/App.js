import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="min-h-screen bg-slate-200 text-slate-600 flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
