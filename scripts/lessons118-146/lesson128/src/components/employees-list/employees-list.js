import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="John S." salary="800"/>
            <EmployeesListItem name="Alex M." salary="3000"/>
            <EmployeesListItem name="Martin C." salary="1000"/>
        </ul>
    )
}

export default EmployeesList;