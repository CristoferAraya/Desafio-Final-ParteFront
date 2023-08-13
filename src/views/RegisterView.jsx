import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { crearUsuario } from '../hooks/DataUsuario';


const RegisterView = () => {

    const [nombre, SetNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [nombreMascota, setNombreMascota] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [RegistroContraseña, setRegistroContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");

    const CrearUsuario = async ()  => {

        console.log("se ha enviado peticion creacion de usuario!");

        if (RegistroContraseña != confirmarContraseña) {
            alert("Contraseña no son iguales");
            return false;
        }

        await crearUsuario(nombre, apellido, nombreMascota, email, telefono, RegistroContraseña);

    }

    return (
        <Container className='d-flex justify-content-center align-items-center mb-5'>
            <div
                className='w-50 rounded'
                style={{
                    backgroundColor: '#F5F5F5',
                    margin: 'auto auto',
                    padding: '2rem',
                }}
            >
                <h3>Registrate </h3>
                    <Form.Control
                        type='text'
                        placeholder='Nombre'
                        className='mb-3'
                        name='nombre'
                        onChange={event => { SetNombre(event.target.value) }}
                    />
                    <Form.Control
                        type='text'
                        placeholder='Apellido'
                        className='mb-3'
                        name='apellidos'
                        onChange={event => { setApellido(event.target.value) }}
                    />
                    <Form.Control
                        type='text'
                        placeholder='Nombre mascota'
                        className='mb-3'
                        name='nombre mascota'
                        onChange={event => { setNombreMascota(event.target.value) }}
                    />
                    <Form.Control
                        type='text'
                        placeholder='Email'
                        className='mb-3'
                        name='email'
                        onChange={event => { setEmail(event.target.value) }}
                    />
                    <Form.Control
                        type='text'
                        placeholder='Teléfono'
                        className='mb-3'
                        name='telefono'
                        onChange={event => { setTelefono(event.target.value) }}
                    />
                    <Form.Control
                        type='password'
                        placeholder='Ingresa tu contraseña'
                        className='mb-3'
                        name='clave'
                        onChange={event => { setRegistroContraseña(event.target.value) }}
                    />
                    <Form.Control
                        type='password'
                        placeholder='Repite contraseña'
                        className='mb-3'
                        name='repite contraseña'
                        onChange={event => { setConfirmarContraseña(event.target.value) }}
                    />
                    <Button
                        type='submit'
                        variant='primary rounded-pill'
                        onClick={CrearUsuario}
                    >
                        Registrarme
                    </Button>
            </div>
        </Container>
    );
};

export default RegisterView;