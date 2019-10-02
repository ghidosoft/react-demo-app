import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';

const Users = ({match}) => (
    <Switch>
        <Route path={`${match.url}/:id`} exact component={UserDetail} />
        <Route path={`${match.url}/`} exact component={UserList} />
    </Switch>
);

export default Users;
