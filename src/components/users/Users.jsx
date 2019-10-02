import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList';

const Users = () => (
    <Switch>
        <Route path="/" component={UserList} />
    </Switch>
);

export default Users;
