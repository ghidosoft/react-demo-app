import React from 'react';
import { Link } from 'react-router-dom';

const UserRow = ({id, employee_name, employee_age, employee_salary}) => (
    <tr>
        <td>
            <Link to={`/users/${id}`}>
                {employee_name}
            </Link>
        </td>
        <td>{employee_age}</td>
        <td>{employee_salary}</td>
    </tr>
);

export default UserRow;
