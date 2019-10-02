import React from 'react';

const UserRow = ({employee_name, employee_age, employee_salary}) => (
    <tr>
        <td>{employee_name}</td>
        <td>{employee_age}</td>
        <td>{employee_salary}</td>
    </tr>
);

export default UserRow;
