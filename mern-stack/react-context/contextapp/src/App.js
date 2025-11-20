import BookList from "./components/BookList.js";
import Navbar from "./components/Navbar.js";
import ThemeToggle from "./components/ThemeToggle.js";
import AuthContextProvider from "./contexts/AuthContext.js";
import ThemeContextProvider from "./contexts/ThemeContext.js";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
