import React from 'react';
import UserRow from './UserRow';

const UserTable = ({items}) => (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) => <UserRow key={item.id} {...item} />)}
        </tbody>
    </table>
);

export default UserTable;
