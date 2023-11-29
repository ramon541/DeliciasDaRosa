import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#f9f9f9" }}>
      <Header />
      <h1>Hello, world!</h1>
      <h2>Here comes a nice content about bakery...</h2>
      <Footer />
    </div>
  );
}
