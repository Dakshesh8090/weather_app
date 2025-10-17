import { useState, useMemo } from "react";
import { createTheme, ThemeProvider, CssBaseline, Button} from "@mui/material";
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

 
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: darkMode ? "#121212" : "#ffffff",
            paper: darkMode ? "#1e1e1e" : "#f5f5f5",
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ textAlign: "center", minHeight: "100vh", paddingBottom: "60px" }}>
       
        <Button
          variant="outlined"
          onClick={() => setDarkMode(!darkMode)}
          sx={{
            position: "fixed",
            top: 20,
            right: 20,
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          {darkMode ? "Light Theme🌞" : "Dark Theme🌙"}
        </Button>
        <WeatherApp />

    
        <Footer />
      </div>
    </ThemeProvider>
  );
}
