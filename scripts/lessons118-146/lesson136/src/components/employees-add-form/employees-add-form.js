import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const inputName = document.querySelector('.app-add-form').getElementsByTagName('input')[0];
        const inputSalary = document.querySelector('.app-add-form').getElementsByTagName('input')[1];
        if(this.state.name.length>1 && this.state.salary.length>1){
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
            inputName.style.color='black';
            inputSalary.style.color='black';
        } else{
            if(this.state.name.length<=1){
                inputName.style.color='red';
            }
            else{
                inputName.style.color='black';
            }
            if(this.state.salary.length<=1){
                inputSalary.style.color='red';
            } 
            else{
                inputSalary.style.color='black';
            }
        }
        
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;