import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <Layout />
    </ThemeProvider>
  );
}

export default App;
