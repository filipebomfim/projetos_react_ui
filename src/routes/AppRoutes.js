import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import NewProject from '../pages/newProject/NewProject'
import Projects from '../pages/projects/Projects'
import Project from '../pages/project/Project'

function AppRoutes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
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