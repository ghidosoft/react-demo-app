import React from 'react';
import UserRow from './UserRow';

const UserTable = ({items}) => (
    <table className="table">
        <thead>
            <tr>
                <td>Name</td>
                <td>Salary</td>
                <td>Age</td>
            </tr>
        </thead>
        <tbody>
            {items.map((item) => <UserRow key={item.id} {...item} />)}
        </tbody>
    </table>
);

export default UserTable;
