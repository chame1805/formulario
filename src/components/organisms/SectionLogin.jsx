import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import Field from '../molecules/Field'; 
import Button from '../atoms/Button';
import LinkedList from '../../data/LinkedList';
import './SectionLogin.css';

function Section1() {
  const List = useRef(new LinkedList());
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [marca, setMarca] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(0); 

  const handlerClick = () => {
    const mat = { username, password, marca, cantidad };
    List.current.append(mat);
    console.log(List);
    Swal.fire({
      title: 'Material Registrado',
      html: `material: ${username}<br/>
             color: ${password}<br/>
             marca: ${marca}<br/>
             cantidad: ${cantidad}`,
      imageUrl: './1.jpeg',
      imageWidth: 400,
      imageHeight: 200,
    });

    console.log('Lista de materiales:');
    List.current.print();
    setUpdate(update + 1); 
  };

  return (
    <div id="login_section">
      <Field type="text" placeholder="username" text="Material" val={username} fnVal={setUsername}/>
      <Field type="text" placeholder="color" text="Color" val={password} fnVal={setPassword}/>
      <Field type="text" placeholder="marca" text="Marca" val={marca} fnVal={setMarca}/>
      <Field type="number" placeholder="cantidad" text="Cantidad" val={cantidad} fnVal={setCantidad}/>
      <Button id="button" title="Registrar Material" onclick={handlerClick}/>
      <Button title="Mostrar" onclick={() => setShow(true)} />
      {show && (
        <div id="imprimir">
          <ul>
            {List.current.toArray().map((material, index) => (
              <li key={index}>
                Material: {material.username}, Color: {material.password}, Marca: {material.marca}, Cantidad: {material.cantidad}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Section1;
