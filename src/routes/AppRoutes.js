import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Pricing from '../pages/pricing/Pricing'
import Contact from '../pages/contact/Contact'
import NewProject from '../pages/newProject/NewProject'
import Projects from '../pages/projects/Projects'
import Project from '../pages/project/Project'

function AppRoutes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/pricing">
                <Pricing />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/newProject">
                <NewProject />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/project/:id">
                <Project />
            </Route>
        </Switch>
    );
};

export default AppRoutes;