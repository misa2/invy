import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import DashboardPage from './../components/DashboardPage'
import NotFoundPage from './../components/NotFoundPage'
import AddPartPage from '../components/AddPartPage'
import EditPartPage from './../components/EditPartPage'
import HelpPage from './../components/HelpPage'
import LoginPage from './../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/add_part" component={AddPartPage} />
                <PrivateRoute path="/edit_part/:id" component={EditPartPage} />
                <PrivateRoute path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;