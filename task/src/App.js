import "./App.css";
import Content from "./components/content";
import { useState } from "react";
import Header from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./components/Main";
import Tooltip from '@mui/material/Tooltip';

function App() {
  const { isAuthenticated } = useAuth0();
  const [theme, settheme] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: theme ? "dark" : "light",
    },
  });
  const handleChange = (event) => {
    settheme(event.target.checked);
  };
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Tooltip className="dark" title="Dark Mode">
        <Switch checked={theme} color="success" onChange={handleChange} />
        </Tooltip>
        {isAuthenticated ? (
          <Routes>
            <Route exact path="/" element={<Content />} />
          </Routes>
        ) : (
          alert("Please login")
        )}
        <CssBaseline />
        <Main></Main>
        
       
      </ThemeProvider>
    </div>
  );
}

export default App;
