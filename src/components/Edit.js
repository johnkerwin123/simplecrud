import React, { useState, useEffect } from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import {useNavigate} from 'react-router-dom';

function Edit() {

    const [name, setName] = useState("");
    const [age, setAge] =  useState("");
    const [id, setId] =  useState("");

    let history = useNavigate();

    var index = Employees.map(function(e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
      e.preventDefault();

      let a = Employees[index];
      a.Name = name;
      a.age = age;

      history("/");
    }

    useEffect (() => {
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('age'))
        setId(localStorage.getItem('id'))
    },[])

    return (       
        <div>
        <h1 style={{textAlign: "center", margin: "5rem",color: "brown"}}> SIMPLE REACTJS CRUD</h1>
           <Form className="d-grid gap-2" style={{margin: "5rem"}}>
              <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="text" placeholder="Enter Name :" value={name} required onChange={(e) => setName(e.target.value)}>
                  </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAge">
                  <Form.Control type="text" placeholder="Enter Age :" value={age} required onChange={(e) => setAge(e.target.value)}>
                  </Form.Control>
              </Form.Group>
              <Button className='btn btn-info' onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )

}

export default Edit;