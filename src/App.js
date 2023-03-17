import  AppRoutes  from './routes/AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from '@mui/material/Container';
import Menu from './components/menu/Menu'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const menuItens = [
    {"name":"Home","url":"/"},
    {"name":"Contact","url":"/contact"},
    {"name":"Pricing","url":"/pricing"},
    {"name":"New Project","url":"/newProject"}
  ];

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
      <Menu menuItens={menuItens}></Menu>
        <Container maxWidth="lg">      
          <CssBaseline />
          <AppRoutes/>             
        </Container>
      </ThemeProvider> 
    </Router>  
  );
}

export default App;
