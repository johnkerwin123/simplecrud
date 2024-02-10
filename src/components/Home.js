import React,{ Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import {Link, useNavigate} from 'react-router-dom'


function Home() {

    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('id', id);
    }
    

    const handleDelete = (id) => {
        var index = Employees.map(function(e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);

        history('/');
    }

    return (
        <Fragment>
            <h1 style={{textAlign: "center", margin: "5rem",color: "brown"}}>SIMPLE REACTJS CRUD</h1>
            <div style={{margin: "5rem"}}>
                <Table striped bordered hover size="sm">
                    <thead style={{textAlign: "center"}}>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) => {
                                return (
                                    <tr style={{textAlign: "center"}}>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td >
                                            {item.age}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button className="btn btn-warning" onClick={() => handleEdit(item.id, item.Name, item.age)}>EDIT</Button>
                                            </Link>
                                            &nbsp;
                                            <Button className="btn btn-danger" onClick={() => handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to= "/create">
                    <Button size="lg">CREATE</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;