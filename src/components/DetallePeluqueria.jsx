import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const DetallePeluqueria = () => {
 
   const { id } = useParams();

 
  const peluqueria = {
    id: 1,
    nombre: 'Peluqueria Canina 1',
    direccion: 'Manuel Montt 23, Providencia, RM3',
    telefono: '123456789',
    descripcion: 'Ofrecemos una amplia gama de servicios de peluqueria para sus canes',
  };

  return (
    <div className="container">
      <div className="peluqueria-details">
        <h2>{peluqueria.nombre}</h2>
        <p>Dirección: {peluqueria.direccion}</p>
        <p>Teléfono: {peluqueria.telefono}</p>
        <p>{peluqueria.descripcion}</p>
      </div>
    </div>
  );
};

export default DetallePeluqueria;
