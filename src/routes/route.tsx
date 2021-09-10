import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

const Users: React.FC = React.lazy(() => import("../ui/page/users/users"));
const AddUser: React.FC = React.lazy(() => import("../ui/page/add-user/add-user"));
const UserDetails: React.FC = React.lazy(() => import("../ui/page/user-details/user-details"));

const Routes = () => {
    return (
        <Switch>
            <Route path="/users" component={Users} />
            <Route path="/add-user" component={AddUser} />
            <Route path="/user/:id" component={UserDetails} />
            <Redirect to="/users" />
        </Switch>
    )
}

export default Routes;