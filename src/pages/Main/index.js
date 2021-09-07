import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi'; 

import api from '../../services/api';

import './style.css';
 
import logoImg from '../../assets/logoLojaPeças.png'; 

export default function Main() {
    const [carParts, setcarParts] = useState([]);

    useEffect(() => {
        api.get('/api/products').then(Response => {
            setcarParts(Response.data); 
        })
    }, []); 

    async function deleteCarPart(id){
        try {
            await api.delete(`api/product/${id}`); 

            setcarParts(carParts.filter(carPart => carPart.id !== id))

        } catch (error) {
            alert('Erro ao deletar, tente novamente'); 
        }
    }

    return(
        <div className="main-container">
            <header>
                <img src={logoImg} alt="Auto-peças" />
                <span>Bem vindo, a nossa Auto-peças!</span>

                <Link className="button" to="/new">Cadastrar nova peça</Link>
            </header>

            <h1>Peças cadastradas:</h1>

            <ul>
                {carParts.map(carPart => (
                    <li key={carPart.id}>
                        <strong>PEÇA: </strong>
                        <p>{carPart.name} </p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{carPart.description}</p>

                        <strong>VALOR: </strong>
                        <p>R$ {carPart.price}</p>

                        <button onClick={() => deleteCarPart(carPart.id)} type="button"> 
                            <FiTrash2 size={20} color="#a8a8b3" /> 
                        </button>
                        <button type="button" >
                            <FiEdit size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
