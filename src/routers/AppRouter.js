import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import DashboardPage from './../components/DashboardPage'
import InventoryPage from './../components/InventoryPage'
import CreateLocationPage from './../components/CreateLocationPage'
import EditLocationPage from './../components/EditLocationPage'
import NotFoundPage from './../components/NotFoundPage'
import AddPartPage from '../components/AddPartPage'
import EditPartPage from './../components/EditPartPage'

import HelpPage from '../components/HelpPage'
import LoginPage from './../components/LoginPage'
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/inventory" component={InventoryPage} />
                <PrivateRoute path="/add_part" component={AddPartPage} />
                <PrivateRoute path="/edit_part/:id" component={EditPartPage} />
                <PrivateRoute path="/create_location" component={CreateLocationPage} />
                <PrivateRoute path="/edit_location/:id" component={EditLocationPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;