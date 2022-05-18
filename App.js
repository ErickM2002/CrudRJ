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
        data: data,
        form:{
            id:'',
            personaje:'',
            rol:''
        },
        modalInsertar: false,
        modalEditar: false,
    };
    
handleChange=e=>{
    this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value,
        }
    });
}

mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true});
}

ocultarModalInsertar=()=>{
    this.setState({modalInsertar: false});
}

mostrarModalEditar=(regitro)=>{
    this.setState({modalEditar: true, form: registro});
}

ocultarModalEditar=()=>{
    this.setState({modalEditar: false});
}

insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsertar: false});
}

editar=(dato)=>{
    var contador=0;
    var lista=this.state.data;
    lista.map((registro)=>{
        if(dato.id==registro.id){
            lista[contador].personaje=dato.personaje;
            lista[contador].rol=dato.rol;
        }
        contador++;
    });
    this.setState({data: lista, modalEditar: false});
}

eliminar=(dato)=>{
    var opcion=window.confirm("¿Realmente desea eliminar el registro?"+dato.id);
    var contador=0;
    var lista=this.state.data;
    lista.map((registro)=>{
        if(registro.id==dato.id){
            lista.splice(contador,1);
        }
        contador++;
    });
    this.setState({data:lista});

}

    render(){
        return(
        <>
        <Container>
        <br />
        <Button color='success' onClick={()=>this.mostrarModalInsertar()}>Insertar nuevo Vengador</Button>
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
                        <td><Button color='primary' onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>{"  "}
                        <Button color='danger' onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>
                    </tr>
                ))}
            </tbody>

        </Table>
        </Container>


        <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
                <div>
                    <h3>Insertar Registro</h3>
                </div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <label>Id:</label>
                    <input className='form-control' readOnly='text' value={this.state.data.length+1}/>
                </FormGroup>
            </ModalBody>

            <ModalBody>
                <FormGroup>
                    <label>Personaje:</label>
                    <input className='form-control' name='personaje' type='text' onChange={this.handleChange}/>
                </FormGroup>
            </ModalBody>

            <ModalBody>
                <FormGroup>
                    <label>Rol:</label>
                    <input className='form-control' name='rol' type='text' onChange={this.handleChange}/>
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color='primary' onClick={()=>this.insertar()}>Insertar</Button>
                <Button color='danger' onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
            </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.modalEditar}>
            <ModalHeader>
                <div>
                    <h3>Editar Registro</h3>
                </div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <label>Id:</label>
                    <input className='form-control' readOnly='text' value={this.state.form.id}/>
                </FormGroup>
            </ModalBody>

            <ModalBody>
                <FormGroup>
                    <label>Personaje:</label>
                    <input className='form-control' name='personaje' type='text' onChange={this.handleChange} value={this.state.form.personaje}/>
                </FormGroup>
            </ModalBody>

            <ModalBody>
                <FormGroup>
                    <label>Rol:</label>
                    <input className='form-control' name='rol' type='text' onChange={this.handleChange} value={this.state.form.rol}/>
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color='primary' onClick={()=>this.editar(this.state.form)}>Editar</Button>
                <Button color='danger' onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
            </ModalFooter>
        </Modal>
        </> );
    }
}
