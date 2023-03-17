import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Pricing from '../pages/pricing/Pricing'
import Contact from '../pages/contact/Contact'
import NewProject from '../pages/newProject/NewProject'
import Projects from '../pages/projects/Projects'

function AppRoutes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/pricing">
                <Pricing />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/newProject">
                <NewProject />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
        </Switch>
    );
};

export default AppRoutes;