import React from 'react';
import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
    {id: 1, personaje: "Iron Man", rol: "Vengador"},
    {id: 2, personaje: "Hulk", rol: "Vengador"},
    {id: 3, personaje: "Capitan America", rol: "Vengador"},
    {id: 4, personaje: "Viuda Negra", rol: "Vengador"},
    {id: 5, personaje: "Ojo de Halcon", rol: "Vengador"},
];


class App extends React.Component{
    state={
        data: data
    }
    render(){
        return(
        <>
        <Container>
        <br />
        <Button color='primary'>Insertar nuevo Vengador</Button>
        <br /><br />

        <Table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Personaje</th>
                <th>Rol</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map((elemento)=>(
                    <tr>
                        <td>{elemento.id}</td>
                        <td>{elemento.personaje}</td>
                        <td>{elemento.rol}</td>
                        <td><Button color='primary'>Editar</Button>{"  "}
                        <Button color='danger'>Eliminar</Button></td>
                    </tr>
                ))}
            </tbody>

        </Table>
        </Container>
        </> )
    }
}
