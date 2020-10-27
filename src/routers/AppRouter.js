import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashboardPage from './../components/DashboardPage'
import InventoryPage from './../components/InventoryPage'
import CreateLocationPage from './../components/CreateLocationPage'
import EditLocationPage from './../components/EditLocationPage'
import NotFoundPage from './../components/NotFoundPage'
import AddPartPage from '../components/AddPartPage'
import EditPartPage from './../components/EditPartPage'
import Header from './../components/Header'
import HelpPage from '../components/HelpPage'
import LoginPage from './../components/LoginPage'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/inventory" component={InventoryPage} />
                <Route path="/add_part" component={AddPartPage} />
                <Route path="/edit_part/:id" component={EditPartPage} />
                <Route path="/create_location" component={CreateLocationPage} />
                <Route path="/edit_location/:id" component={EditLocationPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;