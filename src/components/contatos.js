import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegTrashAlt, FaUserEdit} from 'react-icons/fa';
import {Table, Button} from "reactstrap";

const contatos = ({data, eliminar, editar}) =>{
    return(
        <Table>
            <thead><tr>
            <th>Nome</th>
            <th>Numero Telefone</th>
            <th>Correio</th>
            <th>Ações</th></tr></thead>
            <tbody>
            {data.map((elemento)=>(
                <tr>
                <td>{elemento.nome}</td>
                <td>{elemento.telefone}</td>
                <td>{elemento.Correio}</td>
                <td><Button color="primary" onClick={() => editar(elemento)}><FaUserEdit /> </Button></td>
                <td><Button color="danger" onClick={() => eliminar(elemento)}><FaRegTrashAlt /></Button></td>
                </tr>               
            ))}
            </tbody>
        </Table> 
    )
}
export default contatos;