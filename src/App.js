import  AppRoutes  from './routes/AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from './layouts/container/Container'
import Menu from './layouts/menu/Menu'

function App() {
  const menuItens = [
    {"name":"Home","url":"/"},
    {"name":"Contact","url":"/contact"},
    {"name":"Pricing","url":"/pricing"},
    {"name":"New Project","url":"/newProject"}
  ];

  return (
    <Router>
      <Menu menuItens={menuItens}></Menu>
      <Container customClass="min-height">
        <AppRoutes/>
      </Container>
    </Router>  
  );
}

export default App;
