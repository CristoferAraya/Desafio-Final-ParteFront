import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { getLogin } from '../hooks/DataLogin';
import React, { useState } from 'react';
import { crearUsuario } from '../hooks/DataUsuario';


const LoginView = () => {


    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    

    const Autenticacion = () => {
        console.log("se ha enviado peticion!");

        const respuesta = getLogin(usuario, contraseña)


    }

    return (
        <Container
            style={{
                height: '10rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '15rem'
            }}
        >
            <div className='mb-5 shadow-sm w-75'>
                <Row>
                    <Col
                        md={7}
                        className='rounded-start'
                        style={{
                            backgroundColor: 'writhe',
                            padding: '3rem',
                        }}
                    >
                        <h3>Bienvenido de vuelta</h3>
                        <p>
                            Bienvenido,inicia sesion o registarte para poder hacer reservas y ver mas en detalle los servicios de las peluquerias caninas
                        </p>
                    </Col>
                    <Col
                        md={5}
                        className='rounded-end'
                        style={{
                            padding: '5px',
                            marginTop: '15px',
                            backgroundColor: 'yellow',

                        }}
                    >
                        <h3>Inicia Sesión</h3>

                        <Form.Control
                            type='email'
                            placeholder='Ingresa tu correo'
                            onChange={event => { setUsuario(event.target.value) }}
                        />
                        <Form.Control
                            type='password'
                            placeholder='Ingresa tu contraseña'
                            onChange={event => { setContraseña(event.target.value) }}
                        />
                        <Button
                            variant='primary'
                            type='submit'
                            className='rounded-pill'
                            onClick={Autenticacion}
                        >
                            Ingresar
                        </Button>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: '1rem',
                            }}
                        >
                            <div>¿Aún no tienes cuenta?</div>
                            <Button
                                variant='outline-primary'
                                className='rounded-pill'
                            >
                                Regístrate
                            </Button>

                        </div>
                        <p className='text-center mt-5 fw-bold'>Olvidé mi contraseña</p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default LoginView;